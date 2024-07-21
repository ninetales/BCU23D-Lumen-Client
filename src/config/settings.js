export const SETTINGS = {
    BASE_URL: `http://${window.location.hostname}:${parseInt(import.meta.env.VITE_PORT)}`,
    API_URL: `http://${window.location.hostname}:${parseInt(import.meta.env.VITE_REST_API_PORT)}/api/v1`
};