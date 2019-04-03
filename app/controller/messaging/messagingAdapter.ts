import { Message } from "../../model/message";
//@ts-ignore
import asap from "../../../node_modules/fitbit-asap/app"

export class MessagingAdapter {

  constructor() {
  }

  public init(msgReceivedCallback: any) {
    asap.onmessage = (msg: any) => {
      msgReceivedCallback(Message.fromString(msg))
    }
  }

  public send(msg: Message) {
    asap.send(msg.toString(), { timeout: "session" })
  }

}