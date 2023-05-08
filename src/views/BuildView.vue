<script setup>
import { reactive } from 'vue'

const state = reactive({
    playlists: []
})
fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
}).then(response => {
    if (!response.ok) {
        console.log(response);
        throw new Error('HTTP status ' + response.status);
    }
    return response.json();
}).then(data => {
    console.log(data);
    state.playlists = data['items'];
});
</script>

<template>
  <main>
    <ul>
    <li v-for="playlist in state.playlists">
        {{ playlist['name'] }}
      </li>
    </ul>
  </main>
</template>
