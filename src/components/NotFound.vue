<template>
    <!-- a creative 404 error page template -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <img src="../assets/NotFound.png" alt="Page not found">
                    <h1>This Page is Not on the Map</h1>
                    <!-- <h2>
                    404 Not Found</h2> -->
                    <br>
                    <br>
                    <br>
                    <div class="error-details">
                        You told your friends you weren’t bringing your phone, to try and experience what travel was like
                        back in the day. You bought a map and a bottle of water and carried your camera for the money shot.
                        But the map was from 2005 and the landscape had changed. So here you are, in the middle of a large
                        field, that the map continues to claim is a local grocer.
                    </div>
                    <div class="error-actions">
                        <router-link to="/" >
                            <v-btn tonal>
                                wanna go home
                            </v-btn>
                        </router-link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
}
</script>
<style scoped>
* {
    margin: 0;
    background-color: rgb(131, 217, 200);
    color: rgb(56, 97, 119);
}
.container{
    height: 100vh;
    background-color: rgb(131, 217, 200);
    color: rgb(56, 97, 119);
}
.error-template {
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;	
    text-align: center;
    padding: 20px;
}
.error-details{
max-width: 800px;
margin-top: 4%;
}
.error-actions {
    margin-top: 4%;
    margin-bottom: 15px;
}


/* position the image in the top center */
img{
    width: 300px;
    height: 300px;
}
</style>
