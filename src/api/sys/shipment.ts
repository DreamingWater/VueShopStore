import { shipInfo } from "@/api/sys/model/shipment";
import { shipmentData } from "@/api/sys/fakedata";



export function reqShipData(): shipInfo {
  window.console.log('reqShipData');
  return shipmentData;
}
