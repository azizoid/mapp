import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context";
import { ICustomer } from "../assets/interfaces";

const EditCustomer: React.FC<{ id: number }> = ({ id }) => {
  const context = useContext(AppContext);
  const history = useHistory();

  const [form, setForm] = useState(
    context.customers.find((arr) => arr.customerID === id)
  );

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev!, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    context.setCustomers((prev: ICustomer[]) =>
      prev.map((item: ICustomer) => {
        if (item.customerID === form?.customerID) {
          return form;
        }
        return item;
      })
    );
    history.push("/");
  };

  if (!form) return <div>Nothing to display</div>;
  return (
    <form name="formData" onSubmit={handleSubmit}>
      <h2>Edit Customer</h2>
      <div className="form-group row">
        <label htmlFor="firstNameInput" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            onChange={onChangeHandler}
            value={form.name}
            name="name"
          />
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
            onChange={onChangeHandler}
            value={form.birthday}
            name="birthday"
          />
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
            value={form.gender}
            name="gender"
          >
            <option value="m">Male</option>
            <option value="w">Female</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lifetimeInput" className="col-sm-2 col-form-label">
          Last Contact
        </label>
        <div className="col-sm-10">
          <input
            placeholder="Life Time Value"
            type="text"
            className="form-control "
            id="lastContact"
            onChange={onChangeHandler}
            value={form.lastContact}
            name="lastCotnact"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lifetimeInput" className="col-sm-2 col-form-label">
          Lifetime Value
        </label>
        <div className="col-sm-10">
          <input
            placeholder="Life Time Value"
            type="text"
            className="form-control "
            id="lifetimeInput"
            value={form.customerLifetimeValue}
            onChange={onChangeHandler}
            name="customerLifetimeValue"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary">
            Edit Customer Data
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCustomer;
