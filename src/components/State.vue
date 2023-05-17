<template>
  <div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
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
                            class="sorting_asc"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 101.2px"
                            aria-sort="ascending"
                            aria-label="ticket Id: activate to sort column descending"
                          >
                            code
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="myProjectTable"
                            rowspan="1"
                            colspan="1"
                            style="width: 230.2px"
                            aria-label="Subject: activate to sort column ascending"
                          >
                            Description
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
                            Title
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          role="row"
                          class="even"
                          state
                          v-for="state in states"
                          :key="state.key"
                        >
                          <td tabindex="0" class="sorting_1">
                            <RouterLink to="/TicketDetail" class="fw-bold text-secondary"
                              >#{{ state.id }}</RouterLink
                            >
                          </td>
                          <td>{{ state.code }}</td>
                          <td>
                            <span class="fw-bold ms-1">{{ state.description }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Row End -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "myState",
  data() {
    return {
      state: {
        id: "",
        code: "",
        description: "",
      },

      states: [],
    };
  },

  mounted() {
    this.getStates();
    console.log(this.getStates());
  },
  methods: {
    getStates() {
      axios.get("http://localhost:8080/getALLState").then((response) => {
        console.log(response.data);
        this.states = response.data;
      });
    },
  },
};
</script>
