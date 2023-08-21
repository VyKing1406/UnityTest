using WebSocketSharp;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class WS_Client : MonoBehaviour
{
    private WebSocket ws;
    private float delay = 0;
    public GameObject Text;
    private void Start()
    // AHJt.text = "Received data bla bla bla: ";
    {
        ws = new WebSocket("ws://localhost:8080");
        ws.OnMessage += (sender, e) =>
        {
            if (ws == null)
            {
                return;
            }
            StartCoroutine(UpdateUI(e.Data));

        };
        ws.Connect();

    }
    private IEnumerator UpdateUI (string a) {
        yield return new WaitForSeconds(0f);

        // Hàm sẽ được gọi sau 3 giây
        this.Text.GetComponent<Text>().text = a;
        Debug.Log(this.Text.GetComponent<Text>().text);
    }

    private void Update()
    {
        if (this.delay == 0)
        {
            if (ws == null)
            {
                return;
            }
            ws.Send("Hello");
            this.delay = 3f;
            Invoke("setDelay", 3f);
        }
    }
    private void setDelay()
    {
        this.delay = 0;
    }
}
