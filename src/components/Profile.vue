<template>


  <div class="body d-flex py-3">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="border-0 mb-4">
          <div
            class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap"
          >
            <h3 class="h4 mb-0">Profil</h3>
          </div>
        </div>
      </div>
      <!-- Row end  -->
      <div class="row g-3 mb-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-12 col-lg-3">
                  <img
                    src="../assets/images/profile_av.svg"
                    class="img-thumbnail"
                    alt="..."
                    style="width: 260px"
                  />
                  <ul class="list-unstyled custom d-flex mb-3 mt-3">
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-facebook"></i
                      ></a>
                    </li>
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-twitter"></i
                      ></a>
                    </li>
                    <li class="me-3">
                      <a href="#" class="card-link"
                        ><i class="fa fa-lg fa-instagram"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12 col-lg-9">
                  <h4> Profil <strong>{{currentUser.username}}</strong> </h4>
                  <div
                    class="d-flex flex-row flex-wrap align-items-center mb-3 mt-2"
                  >
                  </div>
                
    
    
                  
                  <ul class="design-box ps-0">
                    <li>
                      <div class="icon text-center">
                        <i class="fa fa-map-marker text-secondary"></i>
                      </div>
                     
                      <span><strong>ID:</strong>
                           {{currentUser.id}}</span>
                           
                    </li>
                    
                    
                    <li>
                      <div class="icon text-center">
                        <i class="fa fa-envelope text-secondary"></i>
                      </div>
                      <div class="fw-bold mb-0"><strong>Email:</strong>
      {{currentUser.email}} </div>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-12">
          <ul class="nav nav-tabs tab-body-header rounded d-inline-flex">
            <li class="nav-item">
              <a
                class="nav-link show active"
                data-bs-toggle="tab"
                href="#Company_Settings"
                >Company</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#Notifications"
                >Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#Change_Password"
                >Change Password
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    
  }
};
</script>