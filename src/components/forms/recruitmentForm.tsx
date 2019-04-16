import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { NetlifyForm } from "./netlifyForm";
import { Formik } from "formik";
import { Field } from "./fields/field";
import { FormRow } from "./layout";
import { Radio } from "./fields/radio";
import Button from "./fields/button";
import { FormSubmissionTerms } from "@components/formTerms";

const levelOfStudyChoices = ["bachelor", "master", "civilingenjör", "other"];

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("That's not an email")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)*(?:kth\.se)$/,
      "Must be a valid KTH email (<name>@kth.se)"
    )
    .required("KTH email is required"),
  name: Yup.string().required("Name is required"),
  "describe yourself": Yup.string()
    .required("Write something about yourself")
    .min(35, function(v) {
      return `Write at least 12.5% of a Tweet (${v.value.length}/35 letters) :)`;
    }),
  "years left at KTH": Yup.number()
    .typeError("Enter an integer")
    .integer("Enter an integer")
    .required("Years left at KTH is required")
    .min(0, "You're already an alumni ;)")
    .max(10, "Max ${max} years"),
  "program of study": Yup.string().required("Please enter your program of study"),
  "level of study": Yup.string()
    .required("Select level of study")
    .oneOf(levelOfStudyChoices)
});

const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));

async function submit(formAction: string, formName: string, values: any) {
  try {
    await fetch(formAction, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName, ...values })
    });
  } finally {
    await wait(500);
  }
}

function useRotatingIndex(interval: number, maxIndex: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const index = setInterval(() => {
      setIndex(i => (i + 1) % maxIndex);
    }, interval);
    return () => clearInterval(index);
  }, [interval]);

  return index;
}

const dots = [".", "..", "..."];
const SubmittingDots: React.FC<{ interval: number }> = props => {
  const index = useRotatingIndex(props.interval, dots.length);
  return <>{dots[index]}</>;
};

export const RecruitmentForm: React.FC<{}> = () => {
  const formName = "contact-new";
  const formAction = "/thank-you";

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        "describe yourself": "",
        "years left at KTH": "",
        "program of study": "",
        "level of study": ""
      }}
      initialStatus="idle"
      validationSchema={validationSchema}
      onSubmit={async (values, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        return submit(formAction, formName, values)
          .then(() => {
            setStatus("submitted");
            setSubmitting(false);
          })
          .catch(error => {
            setStatus("error");
            setSubmitting(false);
            throw error;
          });
      }}
    >
      {({ isSubmitting, status }) => {
        const canEdit = !(isSubmitting || status === "submitted");
        return (
          <NetlifyForm
            formAction={formAction}
            formName={formName}
            potDefaultValue="go-for-launch"
            potName="backend-id"
            id="recruitment"
          >
            <FormRow>
              <Field disabled={!canEdit} label="Your name" type="text" name="name" />
              <Field disabled={!canEdit} label="Your KTH email" type="email" name="email" />
            </FormRow>

            <FormRow />

            <FormRow>
              <Field
                disabled={!canEdit}
                label="Describe what you could help out with at ÆSIR"
                type="text"
                name="describe yourself"
                multiline
              />
            </FormRow>

            <FormRow>
              <Field
                disabled={!canEdit}
                label="Years left at KTH"
                type="number"
                name="years left at KTH"
              />
              <Field
                disabled={!canEdit}
                flex={3}
                label="Program of study"
                type="number"
                name="program of study"
              />
              <Radio
                disabled={!canEdit}
                label="Level of study"
                choices={levelOfStudyChoices}
                name="level of study"
              />
            </FormRow>
            <FormSubmissionTerms />
            <FormRow>
              <Button type="submit" disabled={!canEdit}>
                {status === "submitted" ? (
                  "Thanks! We'll get back to you soon"
                ) : isSubmitting ? (
                  <>
                    Working on it
                    <span style={{ width: 50 }}>
                      <SubmittingDots interval={150} />
                    </span>
                  </>
                ) : status === "error" ? (
                  "Something bad happened. Retry?"
                ) : (
                  "Submit your application"
                )}
              </Button>
            </FormRow>
          </NetlifyForm>
        );
      }}
    </Formik>
  );
};

// <Terms />
