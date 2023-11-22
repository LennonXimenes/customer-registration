import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then((): void => {
        console.log("Database connected");

        const PORT: number = Number(process.env.PORT) || 3001;
        const runningMsg: string = `Server running on http://localhost:${PORT}`;

        app.listen(PORT, (): void => {
            console.log(runningMsg);
        });
    }).catch((error: unknown): void => {
        console.error(error);
    });