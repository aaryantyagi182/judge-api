define({ "api": [  {    "type": "get",    "url": "/langs",    "title": "GET /langs",    "description": "<p>Get all supported Languages</p>",    "name": "GetLangs",    "group": "Langs",    "version": "0.0.1",    "filename": "src/routes/api/langs.ts",    "groupTitle": "Langs",    "sampleRequest": [      {        "url": "http://judge.cb.lk/langs"      }    ]  },  {    "type": "post",    "url": "/run",    "title": "POST /run",    "description": "<p>Run a code and get its output</p>",    "name": "PostRun",    "group": "Run",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String(Base64)",            "optional": false,            "field": "source",            "description": "<p>source code to run (encoded in base64)</p>"          },          {            "group": "Parameter",            "type": "Enum",            "optional": false,            "field": "lang",            "description": "<p>Language of code to execute</p>"          },          {            "group": "Parameter",            "type": "String(Base64)",            "optional": false,            "field": "input",            "description": "<p>[Optional] stdin input for the program (encoded in base64)</p>"          }        ]      },      "examples": [        {          "title": "lang (choices)",          "content": "py2,java7,java8,cpp,cpp14,nodejs6,nodejs8,csharp",          "type": "String"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Submission id</p>"          },          {            "group": "Success 200",            "type": "String(Base64)",            "optional": false,            "field": "stdout",            "description": "<p>Output of stdout of execution (encoded in base64)</p>"          },          {            "group": "Success 200",            "type": "String(Base64)",            "optional": false,            "field": "stderr",            "description": "<p>Output of stderr of execution (encoded in base64)</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "statuscode",            "description": "<p>Result of operation</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 10,\n  \"statuscode\": 0,\n  \"stdout\": \"NA0KMg0KMw==\"\n  \"stderr\": \"VHlwZUVycm9y\"\n}",          "type": "JSON"        }      ]    },    "filename": "src/routes/api/run.ts",    "groupTitle": "Run",    "sampleRequest": [      {        "url": "http://judge.cb.lk/run"      }    ]  },  {    "type": "get",    "url": "/submissions",    "title": "GET /submissions",    "description": "<p>List of all previous submissions</p>",    "name": "GetSubmissions",    "group": "Submissions",    "version": "0.0.1",    "filename": "src/routes/api/submissions.ts",    "groupTitle": "Submissions",    "sampleRequest": [      {        "url": "http://judge.cb.lk/submissions"      }    ]  },  {    "type": "post",    "url": "/submissions",    "title": "POST /submissions",    "description": "<p>Check a code with given testcases</p>",    "name": "PostSubmissions",    "group": "Submissions",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "URL",            "optional": false,            "field": "source",            "description": "<p>URL of file containing the source code to run</p>"          },          {            "group": "Parameter",            "type": "Enum",            "optional": false,            "field": "lang",            "description": "<p>Language of code to execute</p>"          },          {            "group": "Parameter",            "type": "Array(Object)",            "optional": false,            "field": "testcases",            "description": "<p>Array of urls of input and output testcases</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "getstdout",            "description": "<p>Defines if the results will carry value of stdout and stderr (default: false)</p>"          },          {            "group": "Parameter",            "type": "URL",            "optional": false,            "field": "callbackurl",            "description": "<p>An url which we will call (POST) with the judgement results</p>"          }        ]      },      "examples": [        {          "title": "testcases",          "content": "[\n  {\"input\": \"http://file.cb.lk/1872634.txt\", \"output\": \"http://file.cb.lk/151312.txt\"},\n  {\"input\": \"http://file.cb.lk/1827312.txt\", \"output\": \"http://file.cb.lk/123121.txt\"},\n  {\"input\": \"http://file.cb.lk/1314114.txt\", \"output\": \"http://file.cb.lk/513123.txt\"}\n]",          "type": "Array"        },        {          "title": "lang (choices)",          "content": "py2,java7,java8,cpp,cpp14,nodejs6,nodejs8,csharp",          "type": "String"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": ""          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "accepted",            "description": ""          },          {            "group": "Success 200",            "type": "URL",            "optional": false,            "field": "callbackurl",            "description": "<p>The url we will POST back the result to</p>"          }        ],        "Callback": [          {            "group": "Callback",            "type": "Number",            "optional": false,            "field": "id",            "description": ""          },          {            "group": "Callback",            "type": "Array",            "optional": false,            "field": "results",            "description": "<p>Array of object with results (with optionally stderr and stdout inside them if <code>getstdout</code> was set <strong>true</strong> in request)</p>"          }        ]      },      "examples": [        {          "title": "Success-Example:",          "content": "HTTP/1.1 200 OK\n{\n \"id\": 22,\n \"accepted\": true,\n \"callbackurl\": \"http://app.cb.lk/judgement/result\"\n}",          "type": "json"        },        {          "title": "Callback Body:",          "content": "HTTP/1.1 POST\n{\n \"id\": 22,\n \"results\": [\n   {\"statuscode\": 0, \"stdout\": \"JB81jv=\", \"stderr\": \"TnVsbFBvaW50Zng2KB2jbaRpb24=\"},\n   {\"statuscode\": 0, \"stdout\": \"Mbj15A=\", \"stderr\": \"TnVsbFBvabjg12bfjGNlcHRpb24=\"},\n   {\"statuscode\": 0, \"stdout\": \"UV131b=\", \"stderr\": \"TnVsbFBvaW50ZXJFeGNlcHRpb24=\"},\n  ]\n}",          "type": "json"        }      ]    },    "filename": "src/routes/api/submissions.ts",    "groupTitle": "Submissions",    "sampleRequest": [      {        "url": "http://judge.cb.lk/submissions"      }    ]  }] });
