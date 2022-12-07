import axios, { AxiosError } from "axios";
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (body.email) {
        try {
            const res = await axios.post(
                "https://www.getrevue.co/api/v2/subscribers",
                { email: body.email },
                {
                    headers: {
                        Authorization: `Token ${runtimeConfig.apiKey}`,
                    },
                }
            );
            return { message: "Subscribed successfully" };
        } catch (error: any) {
            return { message: error.response.data.error.email[0] };
        }
    } else {
        return { message: "Email must be provided" };
    }
});
