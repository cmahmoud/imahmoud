import moment from "moment";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide("moment", moment);
});
declare module "#app" {
    interface NuxtApp {
        $moment: moment.Moment;
    }
}
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $moment(date?: string): moment.Moment;
    }
}
