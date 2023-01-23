<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
            <div>
                <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </div>
            <div>
               <router-link to="/" class="nav-link">Logout</router-link>
            </div>
            <div>
                <router-link to="/login" class="nav-link">Login</router-link>

            </div>
   
    </div>
</nav>
<router-view />

</template>

<script></script>