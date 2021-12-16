import * as yup from "yup";

export const customBenchmarkFormSchema = yup.object().shape({
  assetTitle: yup.string(),
  assetPercentage: yup
    .string()
    .matches(/^\+?(0|[1-9]\d*)$/, "Should be a positive whole integer.")
    .required("An asset percentage is required."),
});
