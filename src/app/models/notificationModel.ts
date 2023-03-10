import { Replace } from "@helpers/replace"
import { randomUUID } from 'node:crypto'

export interface NotificationModelProps {
  recipientId: string
  content: string
  category: string
  readAt?: Date | null
  canceledAt?: Date | null
  createdAt: Date
}

export class NotificationModel {
  private _id: string
  private props: NotificationModelProps

  constructor(props: Replace<NotificationModelProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date()
    }
  }

  // GETTERS & SETTERS

  public get id() {
    return this._id
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  public get recipientId(): string {
    return this.props.recipientId
  }

  public set content(content: string) {
    this.props.content = content
  }

  public get content(): string {
    return this.props.content
  }

  public set category(category: string) {
    this.props.category = category
  }

  public get category(): string {
    return this.props.category
  }

  public read() {
    this.props.readAt = new Date()
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public cancel() {
    this.props.canceledAt = new Date()
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

}