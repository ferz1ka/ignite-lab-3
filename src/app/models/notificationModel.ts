import { Replace } from "@helpers/replace"
import { randomUUID } from 'node:crypto'

export interface NotificationModelProps {
  recipientId: string
  content: string
  category: string
  readAt?: Date | null
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

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

}