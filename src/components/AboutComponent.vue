<template>
    <div class="container">
        <div class="row items-center">
            <div class="col-6 justify-end">
                <img src="../assets/person.svg" alt="">
            </div>
            <div class="col-6">
                <div class="card">
                    <h3>Be the first to test</h3>
                    <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
                    <button>Apply for access</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.container{
    padding: 0px 100px;
    padding-top:200px;
}

.container .col-6:first-child{
    display:flex;
}

.container .col-6:last-child{
    position: relative;
    right: 100px;
}

img{
    width:400px;
}

.card{
    background: #24053E;
    padding:50px;
    max-width: 80ch;
}

.card h3{
    color: #fff;
    font-weight: 600;
    margin-bottom: 20px;
}

.card p{
    color: #fff;
}

@media only screen and (max-width: 1000px) {
    .container{
        padding: 0px 30px;
        padding-top:100px;
    }

    img{
        width:300px;
    }

    .card{
        max-width: 100%;
        padding: 30px;
    }

    .card h3{
        font-size: 20px;
    }
    .card p{
        font-size: 12px;
    }

    .container .row{
        flex-direction: column;
    }

    .container .col-6{
        width: 100%;
    }

    .container .col-6:first-child{
        justify-content: center !important;
    }   

    .container .col-6:last-child{
        position: relative;
        right: 0px;
        bottom:100px;
    }


}  

</style>