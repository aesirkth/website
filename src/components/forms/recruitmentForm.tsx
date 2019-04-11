import React from "react";
import * as Yup from "yup";
import { NetlifyForm } from "./netlifyForm";
import { Formik } from "formik";
import { Field } from "./fields/field";
import { FormRow } from "./layout";
import { Radio } from "./fields/radio";
import Button from "./fields/button";

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

export const RecruitmentForm: React.FC<{}> = () => {
  /*
  const [field, state, valid, validationMessage] = useStatefulForm<any>(
    () => ({}),
    state => {
      if (typeof state.name !== "string" || state.name.length === 0) {
        return "Name is required!";
      }
      if (typeof state.mail !== "string" || state.mail.length === 0) {
        return "Mail is required!";
      }
      if (!KTHMailRegex.test(state.mail.trim())) {
        return "Mail is required to be a KTH mail (<name>@kth.se)";
      }
      if (typeof state.describeYourself !== "string" || state.describeYourself.length === 0) {
        return "Describe yourself is required!";
      }
      if (typeof state.programOfStudy !== "string" || state.programOfStudy.length === 0) {
        return "Program of study is required!";
      }
      if (typeof state.levelOfStudy !== "string" || state.levelOfStudy.length === 0) {
        return "Level of study is required!";
      }

      const yearsLeft = parseInt(state.yearsLeft, 10);
      if (isNaN(yearsLeft)) {
        return "Years left is required!";
      }
      if (yearsLeft < 0) {
        return "If years left was negative, you're already an alumni ;)";
      }
      if (yearsLeft > 10) {
        return "Years left shouldn't be this long ;)";
      }

      return true;
    }
  );*/

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
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, dirty, isValid, isSubmitting }) => (
        <NetlifyForm
          formAction="/thank-you"
          potDefaultValue="go-for-launch"
          potName="backend-id"
          formName="contact-dev"
          id="recruitment"
        >
          <FormRow>
            <Field label="Your name" type="text" name="name" />
            <Field label="Your KTH email" type="email" name="email" />
          </FormRow>

          <FormRow />

          <FormRow>
            <Field
              label="Describe what you could help out with at ÆSIR"
              type="text"
              name="describe yourself"
              multiline
            />
          </FormRow>

          <FormRow>
            <Field label="Years left at KTH" type="number" name="years left at KTH" />
            <Field flex={3} label="Program of study" type="number" name="program of study" />
            <Radio label="Level of study" choices={levelOfStudyChoices} name="level of study" />
          </FormRow>

          <FormRow>
            <Button type="submit" disabled={isSubmitting}>
              Submit your application
            </Button>
          </FormRow>
          <FormRow>
            <pre>{JSON.stringify({ values, errors, dirty, isValid }, null, "  ")}</pre>
          </FormRow>
        </NetlifyForm>
      )}
    </Formik>
  );
};

// <Terms />
