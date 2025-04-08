import { NotificationContent } from '@/shared/ui/form/FormNotification'

export function notificationResolve(
  notifications: NotificationContent,
  key?: any
) {
  return key && notifications[key]
    ? notifications[key] || notifications.DEFAULT
    : notifications.DEFAULT
}
