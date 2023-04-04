<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="mail" />

    <label>Password:</label>
    <input type="password" required v-model="pswd" />
    <div v-if="passwordError" class="error"> {{passwordError}} </div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
      <option value="accountant">Accountant</option>
    </select>
    <div>
      <input type="checkbox" value="Shaun" v-model="names" >
      <label>Shaun</label>
      <input type="checkbox" value="Alex" v-model="names" >
      <label>Alex</label>
      <input type="checkbox" value="Peter" v-model="names" >
      <label>Peter</label>
    </div>
    
    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill" @click="removeSkill(skill)">
        {{ skill }}
    </div>
    <span class="help">Press 'Alt' + ',(comma)'  key after entering each skill and click on the skill to remove from the list.</span>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label @click="toggleTerms">Accept terms and conditions</label>
    </div>

    <div class="submit">
        <button>Create an Account</button>
    </div>
  </form>

  <p>Email : {{ mail }}</p>
  <p>Password : {{ pswd }}</p>
  <p>Role : {{ role }}</p>
  <p>Terms Accepted : {{ terms }}</p>
  <p>Names : {{ names }}</p>
  <p>Skills : {{ skills }}</p>

</template>

<script>
export default {
  data() {
    return {
      mail: "example@domain.com",
      pswd: "",
      role: "designer",
      terms: false,
      names: [],
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
        // console.log(e)

        if(e.key === ',' && this.tempSkill) {
            if(!this.skills.includes(this.tempSkill)){
                this.skills.push(this.tempSkill)
            }
            this.tempSkill = ''
        }
    },
    removeSkill(skill) {
        // console.log(skill)
        // this.skills.splice(this.skills.indexOf(key),1)
        this.skills = this.skills.filter((item) => {
            return skill !== item
        })
    },
    handleSubmit() {
      // Validate Password
        this.passwordError = this.passwordError.length > 5 ? '' : 'Password must be atleast 6 chars long'
        if(!this.passwordError) {
          console.log('form submitted')
        }
    },
    toggleTerms() {
      this.terms = ! this.terms
    }
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-right: 10px;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"]  {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;

}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
  color:#ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.help {
font-size: 12px;
color: rgba(18, 18, 18, 0.67);
letter-spacing: normal;
    line-height: 18px;
    display: block;
    margin-top: 6px;
    margin-left: 3px;
}

</style>