<template lang="">
    <div>
        <h2>{{this.travel.title}}</h2>
        <img :src="`${travel.cover_image}`" alt="" />
        <p>{{travel.description ? travel.description : "No data"}}</p>
        <div>
            <h2>More Details</h2>
            <ul>

                <li>
                    <span class="bullet-title">Start date: </span>
                    <span>{{travel.start_date ? travel.start_date : "No data"}}</span> 
                </li>
                <li>
                    <span class="bullet-title">End date: </span>
                    <span>{{travel.end_date ? travel.end_date : "No data"}}</span> 
                </li>
                <li>
                    <span class="bullet-title">Rating: </span>
                    <span>{{travel.rating ? travel.rating : "No data"}}</span> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            serverUrl: 'http://127.0.0.1:8000',
            travel: "",
        };
    },

    created() {

        // console.log("Montato");

        axios.get(`${this.serverUrl}/admin/travels/${this.$route.params.id}`).then((resp) => {
            console.log(resp);
            this.travel = resp.data;
        });
    }
}
</script>
<style lang="scss" scoped>
    .bullet-title{
        font-weight: bold;
    }
</style>