import React from "react";

function EditableTable() {
  return (
    <div>
      <div class="card">
        <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
          Editable table
        </h3>
        <div class="card-body">
          <div id="table" class="table-editable">
            <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
            </span>
            <table class="table table-bordered table-responsive-md table-striped text-center">
              <thead>
                <tr>
                  <th class="text-center">user Name</th>
                  <th class="text-center">Email</th>
                  <th class="text-center">Adress</th>
                  <th class="text-center">Phone Number</th>
                  <th class="text-center">Zip Code</th>
                  <th class="text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pt-3-half" contenteditable="true">
                    Aurelia Vega
                  </td>
                  <td class="pt-3-half" contenteditable="true">
                    30
                  </td>
                  <td class="pt-3-half" contenteditable="true">
                    Deepends
                  </td>
                  <td class="pt-3-half" contenteditable="true">
                    Spain
                  </td>
                  <td class="pt-3-half" contenteditable="true">
                    Madrid
                  </td>
                 
                  <td>
                    <span class="table-remove">
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-sm my-0"
                      >
                        Remove
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditableTable;
