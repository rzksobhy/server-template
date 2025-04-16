export {};

declare global {
    namespace Express {
        export interface Request {
            data: Record<string, any>;
            user?: any;
            lang: "AR" | "EN";
        }

        interface Response {
            // Add typed success and error methods
            success(statusCode: number, data?: any): void;
            failure(statusCode: number, errors?: any | any[]): void;
        }
    }
}

type Language = "AR" | "EN";
