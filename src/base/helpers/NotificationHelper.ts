import { notifications } from '@mantine/notifications';

export default class NotificationHelper {
  static showApiError(error: any) {
    if (error?.message) {
      if (!Array.isArray(error?.errors) && error?.errors) {
        const errorsArray = Object.values(error?.errors);

        const errors = Array.prototype.concat.apply([], errorsArray);

        this.showErrorMessage(errors?.[0], errors.join('\n') || 'Server error');
      } else {
        this.showErrorMessage(error.message || 'Server error', 'Server error');
      }
    }
  }

  static showCompleteMessage(title: string, message: string) {
    notifications.show({ title, message, autoClose: 5000, color: 'green' });
  }

  static showErrorMessage(title: string, message: string) {
    notifications.show({ title, message, autoClose: 5000, color: 'red' });
  }
}
