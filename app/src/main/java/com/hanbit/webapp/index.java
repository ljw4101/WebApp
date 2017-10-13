package com.hanbit.webapp;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class index extends AppCompatActivity {
    private String id;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.index);
        final Context context = index.this;

        WebView webView = (WebView) findViewById(R.id.webView);
        WebSettings ws = webView.getSettings();
        ws.setUseWideViewPort(true);
        ws.setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        webView.addJavascriptInterface(new Object(){
            @android.webkit.JavascriptInterface
            public String toString(){
                return "hybrid";
            }
            @android.webkit.JavascriptInterface
            public void showToast(String x){
                Toast.makeText(context, x, Toast.LENGTH_SHORT).show();
                id = x;
            }
        },"hybrid");   //클릭이벤트 적용
        webView.loadUrl("file:///android_asset/www/html/index.html");
    }

    //DB연결 알아서
}
