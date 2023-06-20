import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

function notificationsSchedule() {
        // Configurar el manejador de notificaciones

            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldPlaySound: true,
                    shouldSetBadge: true,
                    shouldShowAlert: true,
                }),
            });
    
            // Programar la notificación
            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Recordatorio de Vacuna',
                    body: 'Anda a ponerle la vacuna del chicungunya a tu carajito',
                    data: { userName: 'Max' },
                },
                trigger: {
                    seconds: 5,
                },
            });
}


export default notificationsSchedule;