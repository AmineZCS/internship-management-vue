<!-- a login component that will be displayed ont top of everything when the user clicks on login in the navbar -->
<template>
    <div class="login" @click.self="closeComp">
        <div class="login__container">
            <div class="login__container__header">
                <h1>Login</h1>
            </div>
            <div class="login__container__form">
                <form>
                    <div class="form__group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="email" @input="errMsg = ''" />
                    </div>
                    <div class="form__group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" @input="errMsg = ''"  />
                    </div>
                    <div class="form__group">
                        <p style="color: red">{{errMsg}}</p>
                    </div>
                    <div class="form__group">
                        <button type="submit" @click.prevent="login">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../api'
import { mapActions } from 'vuex'
export default {
    name: 'LoginComp',
    data() {
        return {
            email: '',
            password: '',
            errMsg: '',
            data: null,
            token: '',
        }
    },
    methods: {
        closeComp() {
            this.$router.push('/');
        },
        async login() {
            console.log(this.email)
            console.log(this.password)
            try {
                const response = await api.post('/login', {
                    email: this.email,
                    password: this.password

                })
                this.loggedIn = true
                this.token = response.data.token
                console.log(this.token)
                console.log(response.data)
                localStorage.setItem('token', this.token)
                if (response.data.role == 'student') {
                    this.$router.push('/Student')
                } else if (response.data.role == 'admin') {
                    this.$router.push('/Admin')
                } else if (response.data.role == 'supervisor') {
                    this.$router.push('/Supervisor')
                }
                return response.data;

            } catch (error) {
                console.log(error.response.data.message);
                this.errMsg = error.response.data.message

            }
        },
        ...mapActions('user', ['checkAuthentication'])

    },
    async created() {
        await this.checkAuthentication()
    }

}
</script>
<style scoped>
.login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login__container {
    width: 90%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.login__header {
    margin-bottom: 2rem;
    text-align: center;
}

.login__header h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
}

.form__group {
    margin-bottom: 1.5rem;
}

.form__group label {
    font-size: 1.2rem;
    font-weight: 500;
    color: #666;
}

.form__group input {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: #f5f5f5;
}

.form__group button {
    width: 100%;
    height: 3.5rem;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form__group button:hover {
    transform: translateY(-3px);
    box-shadow: 0
}
p {
    color: red;
}
</style>
