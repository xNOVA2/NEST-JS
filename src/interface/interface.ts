interface ApiResponse {
    code: number;
    status: boolean;
    msg: string;
    data?: string | object | any;
    total?: number | null;
    accessToken?: string;
    refreshToken?: string;
}

interface ISortOption {
    [key: string]: import("mongoose").SortValues;
}

interface JwtToken {
    accessToken: string;
    refreshToken: string;
}

export {
    ApiResponse,
    ISortOption,
    JwtToken
}