import React from "react";
import { NetlifyForm } from "./netlifyForm";
import Radio from "./fields/radio";
import Button from "./fields/button";
import Field from "./fields/field";

import style from "./style.css";
import { useStatefulForm } from "@hooks/useStatefulForm";

const KTHMailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)*(?:kth\.se)$/;

const LevelOfStudyChoices = ["bachelor", "master", "civilingenjör", "other"];

export const RecruitmentForm: React.FC<{}> = () => {
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
  );

  return (
    <NetlifyForm
      formAction="/thank-you"
      potDefaultValue="go-for-launch"
      potName="backend-id"
      formName="contact-dev"
      valid={valid}
      id="recruitment"
    >
      <pre>{JSON.stringify(state, null, "  ")}</pre>
      <pre>{JSON.stringify({ valid }, null, "  ")}</pre>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.flex}>
            <Field lines="single" type="text" name="name" {...field("name")}>
              Your name
            </Field>
          </div>
          <div className={style.flex}>
            <Field
              lines="single"
              type="email"
              name="email"
              pattern={KTHMailRegex.source}
              {...field("mail")}
            >
              Your KTH email
            </Field>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.flex}>
            <Field
              lines="multiple"
              type="text"
              name="describe yourself"
              {...field("describeYourself")}
            >
              Describe what you could help out with at ÆSIR
            </Field>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.flex}>
            <Field
              lines="single"
              min={0}
              max={10}
              step={1}
              type="number"
              name="years left at KTH"
              {...field("yearsLeft")}
            >
              Whole years left at KTH
            </Field>
          </div>
          <div className={style.third}>
            <Field lines="single" type="text" name="program of study" {...field("programOfStudy")}>
              Program of study
            </Field>
          </div>
          <div className={style.grid}>
            <span className={style.gridLabel}>Level of study</span>
            <div className={style.gridEntries}>
              {LevelOfStudyChoices.map(choice => (
                <Radio
                  key={choice}
                  name="level of study"
                  value={choice}
                  className={style.gridEntry}
                  {...field("levelOfStudy", choice)}
                >
                  {choice}
                </Radio>
              ))}
            </div>
          </div>
        </div>
        {validationMessage && (
          <div className={style.row}>
            <div className={style.flex}>{validationMessage}</div>
          </div>
        )}
        <div className={style.row}>
          <div className={style.flex}>
            <Button disabled={!valid} type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </NetlifyForm>
  );
};

// <Terms />
