<template>
<div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
    <div class="dropdown notifications">
        <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 38 38">
                <path d="M36,34v-2h-2.98c-0.598-0.363-1.081-3.663-1.4-5.847c-0.588-4.075-1.415-9.798-4.146-13.723  C26.584,12.154,25.599,12,24.5,12c-3.646,0-5.576,1.657-7.106,4.086C15.089,19.746,14,30.126,14,33c0,2.757,2.243,5,5,5  c2.414,0,4.435-1.721,4.898-4H36z" style="fill:var(--primary-color);" data-st="fill:var(--chart-color4);"></path>
                <path class="st0" d="M33.02,32c-0.598-0.363-1.081-3.663-1.4-5.847c-0.851-5.899-2.199-15.254-9.101-17.604  C23.433,7.643,24,6.386,24,5c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,1.386,0.567,2.643,1.482,3.549  c-6.902,2.35-8.25,11.705-9.101,17.604C6.209,27.324,5.991,28.813,5.733,30h2.042c0.192-0.961,0.376-2.127,0.586-3.562  C9.36,19.501,10.73,10,19,10c8.27,0,9.64,9.501,10.641,16.442c0.386,2.636,0.682,4.394,1.108,5.558H2v2h12.101  c0.464,2.279,2.485,4,4.899,4c2.415,0,4.435-1.721,4.899-4H36v-2H33.02z M19,8c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3  S20.654,8,19,8z M19,36c-1.304,0-2.416-0.836-2.829-2h5.658C21.416,35.164,20.304,36,19,36z"></path>
            </svg>
            <span class="pulse-ring"></span>
        </a>
        <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
            <div class="card border-0 w380">
                <div class="card-header border-0 p-3">
                    <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                        <span>Notifications</span>
                        <span class="badge text-white">06</span>
                    </h5>
                </div>
                <div class="tab-content card-body">
                    <div class="tab-pane fade show active">
                        <ul class="list-unstyled list mb-0">
                            <li class="py-2 mb-1 border-bottom" v-for="notification in notifications" :key="notification.id">
                                <a href="javascript:void(0);" class="d-flex">
                                    <img class="avatar rounded-circle" src="../assets/images/xs/avatar1.svg" alt="">
                                    <div class="flex-fill ms-2">
                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">{{notification.user.username}}</span> <small>2MIN</small></p>
                                        <span class="">{{notification.message}} <span class="badge bg-success">Add</span></span>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            notifications: []
        };
    },

    mounted() {

        this.getAllNotification();

    },
    methods: {
        getUser() {
            const user = localStorage.getItem("user");
            return user ? JSON.parse(user).id : null;
        },
        getAllNotification() {
            const userId = this.getUser();

            const url = `http://localhost:8080/getnotificationsByUser/${userId}`;

            // Fetch data from the API
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Assign the received notifications to the data property
                    this.notifications = data;
                    console.log(this.notification)
                })
                .catch(error => {
                    console.error(error);
                });
        }

    }
};
</script>
