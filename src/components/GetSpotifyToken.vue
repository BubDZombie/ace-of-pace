<script setup>
// TODO move to config and detect env
const clientId = '9c242361b7a74172934f843c4cab47df';
const redirectUri = 'http://localhost:5173/get_spotify_token';

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');
let codeVerifier = localStorage.getItem('code_verifier');
let body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier
});
const response = fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
}).then(response => {
    if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
    }
    return response.json();
}).then(data => {
    console.log(data);
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
}).then(() => {
    window.location.href=('/build');
}).catch(error => {
    console.error('Error:', error);
});
</script>
