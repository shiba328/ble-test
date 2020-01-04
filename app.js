function connect() {
  let options = {
    acceptAllDevices: true
  }
  
  navigator.bluetooth.requestDevice(options).then((device) => {
    console.log(device);
    // Do something with the device.
  })
  .catch((error) => {
    console.error("Something went wrong. " + error);
  });
}

function disconnect() {
  if (!accelerometer_device || !accelerometer_device.gatt.connected) return ;
  accelerometer_device.gatt.disconnect();
  alert("BLE接続を切断しました。")
}