import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

import { AppContext } from "../context";
import { ICustomer } from "../assets/interfaces";

const AddCustomer: React.FC = () => {
  const context = useContext(AppContext);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<ICustomer>();

  const [form, setForm] = useState<ICustomer>({
    customerID: Math.random(),
    name: "",
    birthday: "",
    gender: "m",
    lastContact: new Date().toISOString(),
    customerLifetimeValue: 0,
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit: SubmitHandler<ICustomer> = () => {
    context.setCustomers((prev: ICustomer[]) => [...prev, form]);
    history.push("/");
  };

  if (!form) return <div>Nothing to display yet</div>;

  return (
    <form name="formData" onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>New Customer Details</h2>
      <div className="form-group row">
        <label htmlFor="firstNameInput" className="col-sm-2 col-form-label">
          Full Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            placeholder="First name, Last name"
            onChange={onChangeHandler}
            name="name"
            ref={register({
              required: true,
              // pattern: /^\w+, \w+$/i,
            })}
          />
          {errors.name && (
            <small className="text-danger">
              Please type your Full name: First Name, Last Name.
            </small>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="birthdayInput" className="col-sm-2 col-form-label">
          Birthday
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="birthdayInput"
            placeholder="yyyy-mm-dd"
            onChange={onChangeHandler}
            name="birthday"
            ref={register({
              required: true,
              pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i,
            })}
          />
          {errors.birthday && (
            <small className="text-danger ">
              Please type birthday with yyyy-mm-dd pattern.
            </small>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="genderInput" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="genderInput"
            onChange={onChangeHandler}
            name="gender"
            ref={register({
              required: true,
              pattern: /^[mw]{1}$/i,
            })}
          >
            <option>Please choose...</option>
            <option value="m">Male</option>
            <option value="w">Female</option>
          </select>
          {errors.gender && (
            <small className="text-danger ">Please choose your gender.</small>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lifetimeInput" className="col-sm-2 col-form-label">
          Last Contact
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="lastContact"
            onChange={onChangeHandler}
            defaultValue={form.lastContact}
            name="lastContact"
            ref={register({
              required: true,
            })}
          />
          {errors.lastContact && (
            <small className="text-danger">
              Please type Last Contact Date.
            </small>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lifetimeInput" className="col-sm-2 col-form-label">
          Lifetime Value
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="lifetimeInput"
            defaultValue={form.customerLifetimeValue}
            onChange={onChangeHandler}
            name="customerLifetimeValue"
            ref={register({
              required: true,
            })}
          />
          {errors.customerLifetimeValue && (
            <small className="text-danger ">
              Please customer Lifetime Value: Number.
            </small>
          )}
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary">
            Add New Customer
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCustomer;
