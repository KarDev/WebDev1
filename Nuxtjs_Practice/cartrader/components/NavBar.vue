<template>
  <header
    class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p @click="logout" class="cursor-pointer">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>

<script setup>

const user = useSupabaseUser()

const supabase = useSupabaseClient()

// const logout = () => {
//   //  1) make user.calue = null
//   //  2) Remove JWT from Cookie browser
//   const {error} =  supabase.auth.signOut()

//   if(error){
//     console.log(error)
//   }
//   // 3) Navigate to home
//   navigateTo('/')
// }

// Another way of doing this

const logout = async () => {
  //  1) make user.calue = null
  //  2) Remove JWT from Cookie browser

  try{
    
    const {error} =  supabase.auth.signOut()
    
    await $fetch('/api/_supabase/session', {
      method:"POST",
      body: {event: "SIGNED_OUT", session: null}
    })
  }
  catch (error) {
    return console.log(error)
  }
  user.value = null;
  // 3) Navigate to home
  navigateTo('/')
}

</script>