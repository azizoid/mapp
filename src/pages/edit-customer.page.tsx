import React from "react";

const EditCustomer: React.FC<{ id: number }> = ({ id }) => {
  return (
    <form>
      <h2>Edit Customer</h2>
      <div className="form-group row">
        <label htmlFor="firstNameInput" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="firstNameInput" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lastNameInput" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="lastNameInput" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="birthdayInput" className="col-sm-2 col-form-label">
          Birthday
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="birthdayInput" />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="genderInput" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-10">
          <select className="form-control" id="genderInput">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
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
          />
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

export default EditCustomer;
