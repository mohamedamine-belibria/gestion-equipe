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
                  <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
    
                  <span
                    >
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}</span
                  >
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
          <div class="tab-content mt-3">
            <div class="tab-pane show active" id="Company_Settings">
              <div class="card mb-3">
                <div class="card-header p-3">
                  <h5 class="card-title">Settings</h5>
                </div>
                <div class="card-body">
                  <form class="row g-3">
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="form-label"
                          >Name <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" value="" />
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Contact Person</label>
                        <input
                          class="form-control"
                          value="John Quinn"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label class="form-label"
                          >Mobile Number
                          <span class="text-danger">*</span></label
                        >
                        <input
                          class="form-control"
                          value="+902-855-8888"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="form-label">Address</label>
                        <textarea
                          class="form-control"
                          placeholder="44 Shirley Ave. West Chicago, IL 60185"
                          aria-label="With textarea"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <label class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <div class="input-group">
                        <span class="input-group-text">@</span>
                        <input
                          type="text"
                          class="form-control"
                          value="Johnquinn@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <label class="form-label">Website Url</label>
                      <div class="input-group">
                        <span class="input-group-text">http://</span>
                        <input type="text" class="form-control" value="" />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                      <div class="form-group">
                        <label class="form-label">Country</label>
                        <select class="form-control">
                          <option value="">-- Select Country --</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                      <div class="form-group">
                        <label class="form-label">State/Province</label>
                        <select class="form-control">
                          <option>California</option>
                          <option>Alaska</option>
                          <option>Alabama</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                      <div class="form-group">
                        <label class="form-label">City</label>
                        <input
                          class="form-control"
                          value="London"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                      <div class="form-group">
                        <label class="form-label">Postal Code</label>
                        <input class="form-control" value="99444" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input
                          class="form-control"
                          value="902-855-8888"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="form-label">Fax</label>
                        <input
                          class="form-control"
                          value="902-855-8888"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-12 mt-4">
                      <button type="button" class="btn btn-primary">
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="Notifications">
              <div class="card">
                <div class="card-header p-3">
                  <h5 class="card-title">Notifications Settings</h5>
                </div>
                <div class="card-body">
                  <ul
                    class="list-unstyled list-group list-group-custom list-group-flush mb-0"
                  >
                    <li class="list-group-item px-0 py-3">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="ns-1"
                        />
                        <label class="form-check-label" for="ns-1">
                          Anyone send me a message
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-3">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="ns-2"
                        />
                        <label class="form-check-label" for="ns-2">
                          Anyone seeing my profile page
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-3">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="ns-3"
                        />
                        <label class="form-check-label" for="ns-3">
                          Anyone posts a comment on my post
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-3">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="ns-4"
                        />
                        <label class="form-check-label" for="ns-4">
                          Anyone send me a message
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item px-0 py-3">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="ns-5"
                        />
                        <label class="form-check-label" for="ns-5">
                          Anyone seeing my profile page
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="Change_Password">
              <div class="card">
                <div class="card-header p-3">
                  <h5 class="card-title">Change Password</h5>
                </div>
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-lg-4 col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          value="Johnquinn"
                          
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          value="Johnquinn@gmail.com"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <h6 class="border-top pt-2 mt-3 mb-3">Change Password</h6>
                      <div class="mb-2">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Current Password"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="New Password"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Confirm New Password"
                        />
                      </div>
                    </div>
                    <div class="col-12 mt-4">
                      <button type="button" class="btn btn-primary">
                        SAVE
                      </button>
                      &nbsp;
                      <button type="button" class="btn btn-default">
                        CANCEL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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