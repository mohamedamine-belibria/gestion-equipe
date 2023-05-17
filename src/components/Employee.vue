<template>
  <div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0">User</h3>
            <div class="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
              <button
                type="button"
                class="btn btn-dark btn-set-task w-sm-100"
                data-bs-toggle="modal"
                data-bs-target="#tickadd"
              >
                <i class="icofont-plus-circle me-2 fs-6"></i>Add User
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row clearfix g-3">
        <div class="col-sm-12">
          <div class="card mb-3">
            <div class="card-body">
              <div
                id="myProjectTable_wrapper"
                class="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="myProjectTable_length">
                      <label
                        >Show
                        <select
                          name="myProjectTable_length"
                          aria-controls="myProjectTable"
                          class="form-select form-select-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        entries</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div id="myProjectTable_filter" class="dataTables_filter">
                      <label
                        >Search:<input
                          type="search"
                          class="form-control form-control-sm"
                          placeholder=""
                          aria-controls="myProjectTable"
                      /></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      id="myProjectTable"
                      class="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"
                      style="width: 100%"
                      role="grid"
                      aria-describedby="myProjectTable_info"
                    >
                      <thead>
                        <tr role="row">
                          
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 230.2px"
                            aria-label="Subject: activate to sort column ascending"
                          >
                            Title
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 216.2px"
                            aria-label="Assigned: activate to sort column ascending"
                          >
                            Description
                          </th>
                          <th
                            class="dt-body-right sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 143.2px"
                            aria-label="Created Date: activate to sort column ascending"
                          >
                            DateCreationTask
                          </th>
                          <th
                            class="dt-body-right sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 143.2px"
                            aria-label="Created Date: activate to sort column ascending"
                          >
                            DateFinTask
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 93.2px"
                            aria-label="Status: activate to sort column ascending"
                          >
                            State
                          </th>
                          <th
                            class="dt-body-right sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 98.2px"
                            aria-label="Actions: activate to sort column ascending"

                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr role="row" class="odd"  v-for="employee in employees"
                  :key="employee.key">

                        <td tabindex="0" class="sorting_1">
                          
                          <span class="fw-bold ms-1">{{employee.lastName}}</span>
                        </td>
                        <td>
                          <a href="projects.html">{{employee.firstName }}</a>
                        </td>
                        <td>
                          <a href="task.html">{{employee.email}}</a>
                        </td>
                        <td>
                          <a href="task.html">{{employee.homeAddress}}</a>
                        </td>
                        <td>
                          <a href="task.html">{{employee.phoneNumber}}</a>
                        </td>
                        
                        <td>
                          <a href="task.html">{{employee.password}}</a>
                        </td>
                         <td>
                          <a href="task.html">{{employee.role.roleService}}</a>
                        </td>
                        
                        
                        
                        <td class="dt-body-right" style="">
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-secondary"
                            v-on:click="getdata(employee.lastName,employee.firstName,employee.email,employee.homeAddress,employee.phoneNumber,employee.password,employee.employeeid,role.roleid)">
                              <i class="icofont-edit text-success" ></i>
                            </button>
                            <button  type="button" class="btn btn-outline-secondary deleterow"  data-bs-toggle="modal"
                            data-bs-target="#deleteEmployee" @click="deleteEmployee(employee)"  >
                              <i class="icofont-ui-delete text-danger"
                                ></i>
                                
                            </button>
                          </div>
                        </td>
                      </tr>
                     
                    </tbody>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div
                      class="dataTables_info"
                      id="myProjectTable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 6 of 6 entries
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="myProjectTable_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="myProjectTable_previous"
                        >
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >Previous</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="myProjectTable_next"
                        >
                          <a
                            href="#"
                            aria-controls="myProjectTable"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >Next</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Row End -->
    </div>
    <div listt class="modal fade" id="tickadd" tabindex="-1" aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable"
      >
        <div class="modal-content">
          <form @submit.prevent="createEmployee">
            
            <div class="modal-body">
              <div class="mb-3">
                <label for="objectif" class="form-label">lastName</label>
                <input
                  type="text"
                  class="form-control"
                  id="objectif"
                  v-model="lastName"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">firstName</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="firstName"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">email</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">homeAddress</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="homeAddress"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">phoneNumber</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="phoneNumber"
                />
              </div>
              
              <div class="mb-3">
                <label for="name" class="form-label">password</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="password"
                />
              </div>
              
              <div class="mb-3">
                <label for="status" class="form-label">role</label>
                <select class="form-select" aria-label="Default select example" v-model="role">
    <option v-for="roleobject in roles" :key="roleobject.key" :value="roleobject">{{ roleobject.roleService }}</option>
</select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
              <button type="submit" class="btn btn-primary">sent</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div listt class="modal fade" id="deleteEmployee" tabindex="-1" aria-hidden="true"   >
    <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">

    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  fw-bold" id="deleteEmployeeLabel"> Delete item Permanently?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closedelete"></button>
                    </div>
                    <div class="modal-body justify-content-center flex-column d-flex">
                        <i class="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                        <p class="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger color-fff"        @click="deleteEmployee(employee)">Delete</button>
                    </div>
                </div>
                </div>
                </div>




  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'myemployee',
  data() {
    return {
      employee: {
        id:"",
        lastName: "",
      firstName: "",
        email: "",
        homeAddress: "",
        phoneNumber: "",
       
        password:"",
        roleid:"",
       
      role: {
        
        id: "",
        code: "",
        roleService:""
      },
      
      },
      dataemployee: {
        lastName: "",
      firstName: "",
        email: "",
        homeAddress: "",
        phoneNumber: "",
       
        password:"",
        roleid:"",
     
       
       roleobject: {
        
        id: "",
        code: "",
        roleService:""
      },
      
      
      },
      employees: [],
      role: {
         id: "",
        code: "",
        roleService:""
        
      },
      roles:[],
    }
  },
  
  mounted() {
    this.getEmployees();
    console.log(this.getEmployees());
    this.getroles();
    console.log(this.getroles());
  },
  methods: {
    getdata(id, lastName, firstName, email, homeAddress,phoneNumber,password) {
      this.dataemployee.id = id
      this.dataemployee.lastName = lastName
      this.dataemployee.firstName = firstName
      this.dataemployee.email = email
      this.dataemployee.homeAddress = homeAddress
      this.dataemployee.phoneNumber = phoneNumber
   
      this.dataemployee.password = password
      console.log(this.dataemployee)
  

    
    },
  
    createEmployee() {
      const data = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        homeAddress: this.homeAddress,
        phoneNumber: this.phoneNumber,
       
        password: this.password,

        role:this.role,
        roleid: this.roleid,
      
        
   
      };
      console.log(data);
      axios
        .post("http://localhost:8080/saveuser", data)
        .then((response) => {
          console.log(response.data); 
          this.employees.push(data);
          document.getElementById('closecreate').click();     
        
        })
        .catch((error) => {
          console.log(error);
        });
    },
     getroles() {
      axios
        .get("http://localhost:8080/getALLrole")
        .then((response) => {
          this.roles = response.data;
          console.log(this.roles)
          
        });
    },
    getEmployees() {
      axios
        .get("http://localhost:8080/getALLuser")
        .then((response) => {
          this.employees = response.data;
          
        });
    },
     deleteselect(employee) {
      this.employee = employee;
      console.log(this.employee)
    },

    deleteEmployee(employee) {
      const url = `http://localhost:8080/deletuser/${employee.id}`;
      axios
        .delete(url)
        .then((response) => {
          console.log(response.data);
          document.getElementById('closedelete').click();
          
           
        })
        .catch((error) => {
          console.log(error);
        });
    },
     
    

   
  }
  
}

</script>
