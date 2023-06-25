import axios from '../../config/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function createUser(email, password, name, role, phone, address, setError, setCheck) {
    try {
        const response = await axios.post('/register', {
            fullname: name,
            address: address,
            phoneN: phone,
            email: email,
            password: password,
            rol: role,
        });
        setError('')
        setCheck(response.data.message)
    } catch (error) {
        if (error.code === 'ERR_BAD_REQUEST') {
            setError('Este correo ya se encuentra registrado');
        }
        else {
            setError('Error del sistema');
        }
    }
}

export async function loginUser(email, password) {
    try {
        const response = await axios.post('/login', {
            email: email,
            password: password,
        });

        const token = response.data.token;
        return token;
    } catch (error) {
        throw new Error('Error en el inicio de sesión');
    }
}

export async function createBaby(finalFormData) {
    const { name, country, email, phone, date, selectedGender } = finalFormData;

    try {
        const token = await AsyncStorage.getItem('token')
        const response = await axios.post('/childs', {
            fullname: name,
            birthD: date,
            emailN: email,
            phoneN: phone,
            genre: selectedGender,
        }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getBabyData() {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('/childs', { headers });
        const childrenData = response.data;
        return childrenData;
    } catch (error) {
        
    }
};

export async function getBabyVaccinationSchedule(babyId) {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`schedules/${babyId}`, { headers });
        const vaccinationSchedule = response.data;
        return vaccinationSchedule;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateSchedule(selectedVaccines) {
    try {
        const token = await AsyncStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post('/schedules', {
            selectedVaccines: selectedVaccines,
        }, {
            headers
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al enviar los datos');
    }
}

export async function deleteBaby(id) {
    try {
        const token = await AsyncStorage.getItem('token')
        const response = await axios.delete(`/childs/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export async function obtenerCredenciales() {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('/user', { headers });
        const user = response.data;
        return user;
    } catch (error) {
        console.error('fallo get baby data');
    }
};

export async function getSchedule() {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('/childs', { headers });
        const schedule = response.data;
        return schedule;
    } catch (error) {
        
    }
};

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem('token');
        // Verificar si el token existe y es válido según tus criterios de validación
        // Por ejemplo, puedes verificar si el token no está vacío o si no ha expirado

        // Si el token existe y es válido, devuelve true; de lo contrario, devuelve false
        return !!token;
    } catch (error) {
        // Manejar el error de AsyncStorage, mostrar mensaje de error, tomar alguna acción apropiada, etc.
        throw new Error('Error al verificar la autenticación');
    }
}