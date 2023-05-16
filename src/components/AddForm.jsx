import React, { useState } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const schema = Yup.object({
  town: Yup.string().required("Town field is required"),
  phase: Yup.string().required("Phase field is required"),
  block: Yup.string().required("Block field is required"),
  plotNo: Yup.string().required("Plot no field is required"),
  street: Yup.string(),
  demand: Yup.string().required("Demand no field is required"),
  extraLand: Yup.boolean(),
  boulevard: Yup.boolean(),
  parkFace: Yup.boolean(),
  possessionChargesPaid: Yup.boolean(),
  utilitiesChargesPaid: Yup.boolean(),
  extraLandLabel: Yup.string(),
  extraLandCharges: Yup.string(),
  extraLandCategory: Yup.string(),
});

function AddForm() {
  const [showExtraLandFields, setShowExtraLandFields] = useState(false);
  const [inputSuccess, setInputSuccess] = useState(false);

  const saveData = async (data) => {
    const url =
      "https://api.sheety.co/d896a1e2e8994f1f6d971c6d9abfeb9e/gsProperties/data";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        url,
        { datum: { ...data } },
        { ...config }
      );
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      town: "",
      phase: "Phase 1",
      block: "",
      plotNo: "",
      street: "",
      demand: "",
      extraLandLabel: "",
      extraLandCharges: "Paid",
      extraLandCategory: "",
      extraLand: false,
      corner: false,
      boulevard: false,
      parkFace: false,
      possessionChargesPaid: false,
      utilitiesChargesPaid: false,
    },
    validationSchema: schema,
    validateOnChange: true,
    onSubmit: async (values) => {
      await saveData(values);
      formik.resetForm();
      setInputSuccess(true);
      setTimeout(() => {
        setInputSuccess(false);
      }, 2000);
    },
  });

  const handleExtraLand = (e) => {
    formik.handleChange(e);
    setShowExtraLandFields(!formik.values.extraLand);
  };

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      {inputSuccess && (
        <div class="toast toast-top toast-end">
          <div class="alert alert-success">
            <div>
              <span>New Record added successfully</span>
            </div>
          </div>
        </div>
      )}
      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Town</span>
          <span className="label-text-alt">required</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="town"
          id="townField"
          value={formik.values.town}
          onChange={formik.handleChange}
          className={`input input-bordered w-full rounded-sm ${
            formik.touched.town && formik.errors.town && "input-error"
          }`}
        />

        {formik.touched.town && formik.errors.town && (
          <p className="text-sm my-1 text-error">{formik.errors.town}</p>
        )}
      </div>

      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Phase</span>
          <span className="label-text-alt">required</span>
        </label>
        <select
          name="phase"
          id="phaseField"
          value={formik.values.phase}
          onChange={formik.handleChange}
          className={`select select-bordered rounded-sm ${
            formik.touched.phase && formik.errors.phase && "input-error"
          }`}
        >
          <option disabled defaultValue>
            Pick one
          </option>
          {[1, 2, 3, 4].map((item, index) => {
            return <option key={index}>Phase {item}</option>;
          })}
        </select>

        {formik.touched.town && formik.errors.town && (
          <p className="text-sm my-1 text-error">{formik.errors.phase}</p>
        )}
      </div>

      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Block</span>
          <span className="label-text-alt">required</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="block"
          id="blockField"
          value={formik.values.block}
          onChange={formik.handleChange}
          className={`input input-bordered w-full rounded-sm ${
            formik.touched.block && formik.errors.block && "input-error"
          }`}
        />
        {formik.touched.block && formik.errors.block && (
          <p className="text-sm my-1 text-error">{formik.errors.block}</p>
        )}
      </div>

      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Plot no</span>
          <span className="label-text-alt">required</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="plotNo"
          id="plotNoField"
          value={formik.values.plotNo}
          onChange={formik.handleChange}
          className={`input input-bordered w-full rounded-sm ${
            formik.touched.plotNo && formik.errors.plotNo && "input-error"
          }`}
        />
        {formik.touched.plotNo && formik.errors.plotNo && (
          <p className="text-sm my-1 text-error">{formik.errors.plotNo}</p>
        )}
      </div>

      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Street /​ Road</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="street"
          id="streetField"
          value={formik.values.street}
          onChange={formik.handleChange}
          className="input input-bordered w-full rounded-sm"
        />
      </div>

      <div className="form-control w-full max-w-xl mb-3">
        <label className="label">
          <span className="label-text">Demand</span>
          <span className="label-text-alt">required</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="demand"
          id="demandField"
          value={formik.values.demand}
          onChange={formik.handleChange}
          className={`input input-bordered w-full rounded-sm ${
            formik.touched.demand && formik.errors.demand && "input-error"
          }`}
        />
        {formik.touched.demand && formik.errors.demand && (
          <p className="text-sm my-1 text-error">{formik.errors.demand}</p>
        )}
      </div>

      <hr className="my-8" />
      <h3 className="mb-3">Categories</h3>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Extra Land</span>
          <input
            id="extraLandField"
            name="extraLand"
            type="checkbox"
            defaultChecked={formik.values.extraLand}
            value={formik.values.extraLand}
            onChange={handleExtraLand}
            className="checkbox"
          />
        </label>
      </div>

      {showExtraLandFields && (
        <div className="my-2 p-3 bg-base-200 rounded-sm shadow-sm">
          <div className="form-control w-full max-w-xl mb-3">
            <label className="label">
              <span className="label-text">Extra Land</span>
              <span className="label-text-alt">
                Specify Extra Land in Marla, Sqft, Sqy
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="extraLandLabel"
              id="extraLandLabelField"
              value={formik.values.extraLandLabel}
              onChange={formik.handleChange}
              className={`input input-bordered w-full rounded-sm`}
            />
          </div>

          <div className="form-control w-full max-w-xl mb-3">
            <label className="label">
              <span className="label-text">Extra land charges</span>
            </label>
            <select
              name="extraLandCharges"
              id="extraLandChargesField"
              value={formik.values.extraLandCharges}
              onChange={formik.handleChange}
              className={`select select-bordered rounded-sm`}
            >
              <option disabled defaultValue>
                Pick one
              </option>
              {["Paid", "Not Paid"].map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>

            {formik.touched.town && formik.errors.town && (
              <p className="text-sm my-1 text-error">{formik.errors.phase}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xl mb-3">
            <label className="label">
              <span className="label-text">Extra Land Category </span>
            </label>
            <select
              name="extraLandCategory"
              id="extraLandCategoryField"
              value={formik.values.extraLandCategory}
              onChange={formik.handleChange}
              className={`select select-bordered rounded-sm`}
            >
              <option disabled defaultValue>
                Pick one
              </option>
              {["A", "B", "C", "D", "E"].map((item, index) => {
                return <option key={index}>Cat {item}</option>;
              })}
            </select>
          </div>
        </div>
      )}

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Corner</span>
          <input
            id="cornerField"
            name="corner"
            type="checkbox"
            defaultChecked={formik.values.corner}
            value={formik.values.corner}
            onChange={formik.handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Boulevard</span>
          <input
            id="boulevardField"
            name="boulevard"
            type="checkbox"
            defaultChecked={formik.values.boulevard}
            value={formik.values.boulevard}
            onChange={formik.handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Park Face</span>
          <input
            id="parkFaceField"
            name="parkFace"
            type="checkbox"
            defaultChecked={formik.values.parkFace}
            value={formik.values.parkFace}
            onChange={formik.handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Possession charges paid</span>
          <input
            id="possessionChargesPaidField"
            name="possessionChargesPaid"
            type="checkbox"
            defaultChecked={formik.values.possessionChargesPaid}
            value={formik.values.possessionChargesPaid}
            onChange={formik.handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Utilities charges paid</span>
          <input
            id="utilitiesChargesPaidField"
            name="utilitiesChargesPaid"
            type="checkbox"
            defaultChecked={formik.values.utilitiesChargesPaid}
            value={formik.values.utilitiesChargesPaid}
            onChange={formik.handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <input
        type="submit"
        value="Save"
        className="btn w-full btn-primary mt-5"
      />
    </form>
  );
}

export default AddForm;
