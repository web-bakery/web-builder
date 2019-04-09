<template>
    <nav class="app-nav">
        <div class="app-menu">
            <a href="" class="app-item">
                <img src="../../assets/icons/dashboard.svg" alt="" class="app-icon">
                <span class="app-title">Dashboard</span>
            </a>
            <router-link to="/" class="app-item">
                <img src="../../assets/icons/builder.svg" alt="" class="app-icon">
                <span class="app-title">Builder</span>
            </router-link>
            <a href="" class="app-item">
                <img src="../../assets/icons/team.svg" alt="" class="app-icon">
                <span class="app-title">Team</span>
            </a>
            <router-link to="/settings" class="app-item active">
                <img src="../../assets/icons/settings.svg" alt="" class="app-icon">
                <span class="app-title">Settings</span>
            </router-link>
        </div>
    </nav>
</template>

