/**
 * Represents a Notification.
 * @param {string} title - The title of the notification.
 * @param {string} message - The message of the notification.
 * @param {string} type - danger, success, info, warning, default
 * @param {number} timer - after seconds the notification will deleted.
 */
export type Notification = {
    title: string;
    message: string;
    type: string;
    timeout?: any;
    timer: number;
}
