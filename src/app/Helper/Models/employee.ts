
    export interface IEmployee {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface Support {
        url: string;
        text: string;
    }

    export interface IEmployeeResponse {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: IEmployee[];
        support: Support;
    }
