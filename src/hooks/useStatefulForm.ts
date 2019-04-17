import { useReducer, useMemo } from "react";

type Action =
  | {
      type: "input";
      name: string;
      value: any;
    }
  | {
      type: "blur";
      name: string;
    };

type State<T> = { state: T; touched: string[] };

function formReducer<T>(state: State<T>, action: Action) {
  switch (action.type) {
    case "input":
      return {
        state: {
          ...state.state,
          [action.name]: action.value
        },
        touched: state.touched
      };
    case "blur":
      return {
        state: state.state,
        touched: [...new Set([...state.touched, action.name])]
      };
    default:
      throw new Error();
  }
}

export function useStatefulForm<T extends { [key: string]: any }>(
  initialState: () => T,
  validate: (values: T) => true | string
) {
  const [data, dispatch] = useReducer(formReducer, {
    state: initialState() as T,
    touched: [] as string[]
  });

  const { state, touched } = data as State<T>;

  function field(name: string, checkedValue?: any) {
    const didChange = (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.name !== name) {
        throw new Error(
          "Mismatch between target name '" +
            e.currentTarget.name +
            "' and field name '" +
            name +
            "' found"
        );
      }

      if (checkedValue != null) {
        dispatch({
          type: "input",
          name,
          value: e.currentTarget.value
        });
      } else {
        dispatch({
          type: "input",
          name,
          value: e.currentTarget.value
        });
      }
    };
    return {
      name,
      "data-touched": touched.includes(name) ? "yes" : undefined,
      checked: checkedValue != null ? state[name] === checkedValue : undefined,
      value: checkedValue || state[name] || "",
      onInput: didChange,
      onChange: didChange,
      onBlur: () => {
        dispatch({ type: "blur", name });
      }
    };
  }

  const valid = useMemo(() => validate(state), [state]);
  return [field, state, valid === true, typeof valid === "string" ? valid : null] as [
    typeof field,
    T,
    boolean,
    string | null
  ];
}
