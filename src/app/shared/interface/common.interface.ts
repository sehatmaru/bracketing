export interface CommonResponse<T> {
    result: T;
    message: string;
    statusCode: number;
}

export interface ComboBoxi {
    label: any;
    value: any;
    newLabel?: any;
}
