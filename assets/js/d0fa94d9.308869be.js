"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[83491],{52606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(61839);const s={title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n"},o="How to write E2E tests for plugins",r={unversionedId:"DeveloperManuals/E2E-Test-Guide",id:"version-v0.20/DeveloperManuals/E2E-Test-Guide",title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n",source:"@site/versioned_docs/version-v0.20/DeveloperManuals/E2E-Test-Guide.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/E2E-Test-Guide",permalink:"/docs/v0.20/DeveloperManuals/E2E-Test-Guide",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/DeveloperManuals/E2E-Test-Guide.md",tags:[],version:"v0.20",frontMatter:{title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n"},sidebar:"docsSidebar",previous:{title:"Tag Naming Conventions",permalink:"/docs/v0.20/DeveloperManuals/TagNamingConventions"},next:{title:"DevLake Release Guide",permalink:"/docs/v0.20/DeveloperManuals/Release-SOP"}},l={},p=[{value:"Why write E2E tests",id:"why-write-e2e-tests",level:2},{value:"Preparing data",id:"preparing-data",level:2},{value:"DevLake Code Generator Export",id:"devlake-code-generator-export",level:3},{value:"GoLand Database export",id:"goland-database-export",level:3},{value:"MySQL Select Into Outfile",id:"mysql-select-into-outfile",level:3},{value:"Vscode Database",id:"vscode-database",level:3},{value:"MySQL workbench",id:"mysql-workbench",level:3},{value:"Postgres Copy with csv header",id:"postgres-copy-with-csv-header",level:3},{value:"Writing E2E tests",id:"writing-e2e-tests",level:2},{value:"Verify that the results of the task are correct",id:"verify-that-the-results-of-the-task-are-correct",level:2},{value:"Run E2E tests for all plugins like CI",id:"run-e2e-tests-for-all-plugins-like-ci",level:2}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-write-e2e-tests-for-plugins"},"How to write E2E tests for plugins"),(0,i.kt)("h2",{id:"why-write-e2e-tests"},"Why write E2E tests"),(0,i.kt)("p",null,"E2E testing, as a part of automated testing, generally refers to black-box testing at the file and module level or unit testing that allows the use of some external services such as databases. The purpose of writing E2E tests is to shield some internal implementation logic and see whether the same external input can output the same result in terms of data aspects. In addition, compared to the black-box integration tests, it can avoid some chance problems caused by network and other factors. More information about the plugin can be found here: Why write E2E tests (incomplete).\nIn DevLake, E2E testing consists of interface testing and input/output result validation for the plugin Extract/Convert subtask. This article only describes the process of writing the latter. As the Collectors invoke external\nservices we typically do not write E2E tests for them."),(0,i.kt)("h2",{id:"preparing-data"},"Preparing data"),(0,i.kt)("p",null,"Let's take a simple plugin - Feishu Meeting Hours Collection as an example here. Its directory structure looks like this.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175061114-53404aac-16ca-45d1-a0ab-3f61d84922ca.png",alt:"image"}),"\nNext, we will write the E2E tests of the sub-tasks."),(0,i.kt)("p",null,"The first step in writing the E2E test is to run the Collect task of the corresponding plugin to complete the data collection; that is, to have the corresponding data saved in the table starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_feishu_"),' in the database.\nThis data will be presumed to be the "source of truth" for our tests. Here are the logs and database tables using the DirectRun (cmd) run method.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ go run plugins/feishu/main.go --numOfDaysToCollect 2 --connectionId 1 (Note: command may change with version upgrade)\n[2022-06-22 23:03:29] INFO failed to create dir logs: mkdir logs: file exists\npress `c` to send cancel signal\n[2022-06-22 23:03:29]  INFO  [feishu] start plugin\n[2022-06-22 23:03:33]  INFO  [feishu] scheduler for api https://open.feishu.cn/open-apis/vc/v1 worker: 13, request: 10000, duration: 1h0m0s\n[2022-06-22 23:03:33]  INFO  [feishu] total step: 2\n[2022-06-22 23:03:33]  INFO  [feishu] executing subtask collectMeetingTopUserItem\n[2022-06-22 23:03:33]  INFO  [feishu] [collectMeetingTopUserItem] start api collection\n[2022-06-22 23:03:34]  INFO  [feishu] [collectMeetingTopUserItem] finished records: 1\n[2022-06-22 23:03:34]  INFO  [feishu] [collectMeetingTopUserItem] end api collection error: %!w(<nil>)\n[2022-06-22 23:03:34]  INFO  [feishu] finished step: 1 / 2\n[2022-06-22 23:03:34]  INFO  [feishu] executing subtask extractMeetingTopUserItem\n[2022-06-22 23:03:34]  INFO  [feishu] [extractMeetingTopUserItem] get data from _raw_feishu_meeting_top_user_item where params={"connectionId":1} and got 148\n[2022-06-22 23:03:34]  INFO  [feishu] [extractMeetingTopUserItem] finished records: 1\n[2022-06-22 23:03:34]  INFO  [feishu] finished step: 2 / 2\n')),(0,i.kt)("img",{width:"993",alt:"image",src:"https://user-images.githubusercontent.com/3294100/175064505-bc2f98d6-3f2e-4ccf-be68-a1cab1e46401.png"}),"Ok, the data has now been saved to the `_raw_feishu_*` table, and the `data` column is the return information from the plugin. Here we only collected data for the last 2 days. The data information is not much, but it also covers a variety of situations. That is, the same person has data on different days.",(0,i.kt)("p",null,"It is also worth mentioning that the plugin runs two tasks, ",(0,i.kt)("inlineCode",{parentName:"p"},"collectMeetingTopUserItem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"extractMeetingTopUserItem"),". The former is the task of collecting, which is needed to run this time, and the latter is the task of extracting data. It doesn't matter whether the extractor runs in the prepared data session."),(0,i.kt)("p",null,"Next, we need to export the data to .csv format. This step can be done in a variety of different ways - you can show your skills. I will only introduce a few common methods here."),(0,i.kt)("h3",{id:"devlake-code-generator-export"},"DevLake Code Generator Export"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-e2e-raw")," directly and follow the guidelines to complete the export. This solution is the simplest, but has some limitations, such as the exported fields being fixed. You can refer to the next solutions if you need more customisation options."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175849225-12af5251-6181-4cd9-ba72-26087b05ee73.gif",alt:"usage"})),(0,i.kt)("h3",{id:"goland-database-export"},"GoLand Database export"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175067303-7e5e1c4d-2430-4eb5-ad00-e38d86bbd108.png",alt:"image"})),(0,i.kt)("p",null,"This solution is very easy to use and will not cause problems using Postgres or MySQL.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175068178-f1c1c290-e043-4672-b43e-54c4b954c685.png",alt:"image"}),"\nThe success criteria for csv export is that the go program can read it without errors, so several points are worth noticing."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the values in the csv file should be wrapped in double quotes to avoid special symbols such as commas in the values that break the csv format"),(0,i.kt)("li",{parentName:"ol"},"double quotes in csv files are escaped. generally ",(0,i.kt)("inlineCode",{parentName:"li"},'""')," represents a double quote"),(0,i.kt)("li",{parentName:"ol"},"pay attention to whether the column ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," is the actual value, not the value after base64 or hex")),(0,i.kt)("p",null,"After exporting, move the .csv file to ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/feishu/e2e/raw_tables/_raw_feishu_meeting_top_user_item.csv"),"."),(0,i.kt)("h3",{id:"mysql-select-into-outfile"},"MySQL Select Into Outfile"),(0,i.kt)("p",null,"This is MySQL's solution for exporting query results to a file. The MySQL currently started in docker-compose-dev.yml comes with the --security parameter, so it does not allow ",(0,i.kt)("inlineCode",{parentName:"p"},"select ... into outfile"),". The first step is to turn off the security parameter, which is done roughly as follows.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175070770-9b7d5b75-574b-49ed-9bca-e9f611f60795.jpg",alt:"origin_img_v2_c809c901-01bc-4ec9-b52a-ab4df24c376g"}),"\nAfter closing it, use ",(0,i.kt)("inlineCode",{parentName:"p"},"select ... into outfile")," to export the csv file. The export result is rough as follows.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175070866-2204ae13-c058-4a16-bc20-93ab7c95f832.jpg",alt:"origin_img_v2_ccfdb260-668f-42b4-b249-6c2dd45816ag"}),"\nNotice that the data field has extra hexsha fields, which need to be manually converted to literal quantities."),(0,i.kt)("h3",{id:"vscode-database"},"Vscode Database"),(0,i.kt)("p",null,"This is Vscode's solution for exporting query results to a file, but it is not easy to use. Here is the export result without any configuration changes\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175071987-760c2537-240c-4314-bbd6-1a0cd85ddc0f.jpg",alt:"origin_img_v2_c9eaadaa-afbc-4c06-85bc-e78235f7eb3g"}),"\nHowever, it is obvious that the escape symbol does not conform to the csv specification, and the data is not successfully exported. After adjusting the configuration and manually replacing ",(0,i.kt)("inlineCode",{parentName:"p"},'\\"')," with ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),", we get the following result.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175072314-954c6794-3ebd-45bb-98e7-60ddbb5a7da9.png",alt:"image"}),"\nThe data field of this file is encoded in base64, so it needs to be decoded manually to a literal amount before using it."),(0,i.kt)("h3",{id:"mysql-workbench"},"MySQL workbench"),(0,i.kt)("p",null,"This tool must write the SQL yourself to complete the data export, which can be rewritten by imitating the following SQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, params, CAST(`data` as char) as data, url, input,created_at FROM _raw_feishu_meeting_top_user_item;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175080866-1631a601-cbe6-40c0-9d3a-d23ca3322a50.png",alt:"image"}),"\nSelect csv as the save format and export it for use."),(0,i.kt)("h3",{id:"postgres-copy-with-csv-header"},"Postgres Copy with csv header"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Copy(SQL statement) to '/var/lib/postgresql/data/raw.csv' with csv header;")," is a common export method for PG to export csv, which can also be used here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\nSELECT id, params, convert_from(data, 'utf-8') as data, url, input,created_at FROM _raw_feishu_meeting_top_user_item\n) to '/var/lib/postgresql/data/raw.csv' with csv header;\n")),(0,i.kt)("p",null,"Use the above statement to complete the export of the file. If pg runs in docker, just use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"docker cp")," to export the file to the host."),(0,i.kt)("h2",{id:"writing-e2e-tests"},"Writing E2E tests"),(0,i.kt)("p",null,"First, create a test environment. For example, let's create ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting_test.go"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175091380-424974b9-15f3-457b-af5c-03d3b5d17e73.png",alt:"image"}),"\nThen enter the test preparation code in it as follows. The code is to create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"feishu")," plugin and then call ",(0,i.kt)("inlineCode",{parentName:"p"},"ImportCsvIntoRawTable")," to import the data from the csv file into the ",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_feishu_meeting_top_user_item")," table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMeetingDataFlow(t *testing.T) {\n    var plugin impl.Feishu\n    dataflowTester := e2ehelper.NewDataFlowTester(t, "feishu", plugin)\n\n    // import raw data table\n    dataflowTester.ImportCsvIntoRawTable("./raw_tables/_raw_feishu_meeting_top_user_item.csv", "_raw_feishu_meeting_top_user_item")\n}\n')),(0,i.kt)("p",null,"The signature of the import function is as follows.\n",(0,i.kt)("inlineCode",{parentName:"p"},"func (t *DataFlowTester) ImportCsvIntoRawTable(csvRelPath string, rawTableName string)"),"\nIt has a twin, with only slight differences in parameters.\n",(0,i.kt)("inlineCode",{parentName:"p"},"func (t *DataFlowTester) ImportCsvIntoTabler(csvRelPath string, dst schema.Tabler)"),"\nThe former is used to import tables in the raw layer. The latter is used to import arbitrary tables.\n",(0,i.kt)("strong",{parentName:"p"},"Note:")," These two functions will delete the db table and use ",(0,i.kt)("inlineCode",{parentName:"p"},"gorm.AutoMigrate")," to re-create a new table to clear data in it.\nAfter importing the data is complete, run this tester and it must be PASS without any test logic at this moment. Then write the logic for calling the call to the extractor task in ",(0,i.kt)("inlineCode",{parentName:"p"},"TestMeetingDataFlow"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMeetingDataFlow(t *testing.T) {\n    var plugin impl.Feishu\n    dataflowTester := e2ehelper.NewDataFlowTester(t, "feishu", plugin)\n\n    taskData := &tasks.FeishuTaskData{\n        Options: &tasks.FeishuOptions{\n            ConnectionId: 1,\n        },\n    }\n\n    // import raw data table\n    dataflowTester.ImportCsvIntoRawTable("./raw_tables/_raw_feishu_meeting_top_user_item.csv", "_raw_feishu_meeting_top_user_item")\n\n    // verify extraction\n    dataflowTester.FlushTabler(&models.FeishuMeetingTopUserItem{})\n    dataflowTester.Subtask(tasks.ExtractMeetingTopUserItemMeta, taskData)\n\n}\n')),(0,i.kt)("p",null,"The added code includes a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.FlushTabler")," to clear the table ",(0,i.kt)("inlineCode",{parentName:"p"},"_tool_feishu_meeting_top_user_items")," and a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.Subtask")," to simulate the running of the subtask ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtractMeetingTopUserItemMeta"),"."),(0,i.kt)("p",null,"Now run it and see if the subtask ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtractMeetingTopUserItemMeta")," completes without errors. The data results of the ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," run generally come from the raw table, so the plugin subtask will run correctly if written without errors. We can observe if the data is successfully parsed in the db table in the tool layer. In this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"_tool_feishu_meeting_top_user_items")," table has the correct data."),(0,i.kt)("p",null,"If the run is incorrect, maybe you can troubleshoot the problem with the plugin itself before moving on to the next step."),(0,i.kt)("h2",{id:"verify-that-the-results-of-the-task-are-correct"},"Verify that the results of the task are correct"),(0,i.kt)("p",null,"Let's continue writing the test and add the following code at the end of the test function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMeetingDataFlow(t *testing.T) {\n    ......\n    \n    dataflowTester.VerifyTable(\n      models.FeishuMeetingTopUserItem{},\n      "./snapshot_tables/_tool_feishu_meeting_top_user_items.csv",\n      []string{\n        "meeting_count",\n        "meeting_duration",\n        "user_type",\n        "_raw_data_params",\n        "_raw_data_table",\n        "_raw_data_id",\n        "_raw_data_remark",\n      },\n    )\n}\n')),(0,i.kt)("p",null,"Its purpose is to call ",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.VerifyTable")," to complete the validation of the data results. The third parameter is all the fields of the table that need to be verified.\nThe data used for validation exists in ",(0,i.kt)("inlineCode",{parentName:"p"},". /snapshot_tables/_tool_feishu_meeting_top_user_items.csv"),", but of course, this file does not exist yet."),(0,i.kt)("p",null,"There is a twin, more generalized function, that could be used instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'dataflowTester.VerifyTableWithOptions(models.FeishuMeetingTopUserItem{}, \n        dataflowTester.TableOptions{\n            CSVRelPath: "./snapshot_tables/_tool_feishu_meeting_top_user_items.csv"\n        },\n    )\n\n')),(0,i.kt)("p",null,"The above usage will be default to validating against all fields of the ",(0,i.kt)("inlineCode",{parentName:"p"},"models.FeishuMeetingTopUserItem")," model. There are additional fields on ",(0,i.kt)("inlineCode",{parentName:"p"},"TableOptions")," that can be specified to limit which fields on that model to perform validation on."),(0,i.kt)("p",null,"To facilitate the generation of the file mentioned above, DevLake has adopted a testing technique called ",(0,i.kt)("inlineCode",{parentName:"p"},"Snapshot"),", which will automatically generate the file based on the run results when the ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyTable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyTableWithOptions")," functions are called without the csv existing."),(0,i.kt)("p",null,"But note! Please do two things after the snapshot is created: 1. check if the file is generated correctly 2. re-run it to make sure there are no errors between the generated results and the re-run results.\nThese two operations are critical and directly related to the quality of test writing. We should treat the snapshot file in ",(0,i.kt)("inlineCode",{parentName:"p"},".csv")," format like a code file."),(0,i.kt)("p",null,"If there is a problem with this step, there are usually 2 ways to solve it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The validated fields contain fields like create_at runtime or self-incrementing ids, which cannot be repeatedly validated and should be excluded."),(0,i.kt)("li",{parentName:"ol"},"there is ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"\\r\\n")," or other escape mismatch fields in the run results. Generally, when parsing the ",(0,i.kt)("inlineCode",{parentName:"li"},"httpResponse")," error, you can follow these solutions:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"modify the field type of the content in the api model to `json."),(0,i.kt)("li",{parentName:"ol"},"convert it to string when parsing"),(0,i.kt)("li",{parentName:"ol"},"so that the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," symbol can be kept intact, avoiding the parsing of line breaks by the database or the operating system")))),(0,i.kt)("p",null,"For example, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"github")," plugin, this is how it is handled.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098219-c04b810a-deaf-4958-9295-d5ad4ec152e6.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098273-e4a18f9a-51c8-4637-a80c-3901a3c2934e.png",alt:"image"})),(0,i.kt)("p",null,"Well, at this point, the E2E writing is done. We have added a total of 3 new files to complete the testing of the meeting length collection task. It's pretty easy.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098574-ae6c7fb7-7123-4d80-aa85-790b492290ca.png",alt:"image"})),(0,i.kt)("h2",{id:"run-e2e-tests-for-all-plugins-like-ci"},"Run E2E tests for all plugins like CI"),(0,i.kt)("p",null,"It's straightforward. Just run ",(0,i.kt)("inlineCode",{parentName:"p"},"make e2e-plugins")," because DevLake has already solidified it into a script~"))}u.isMDXComponent=!0}}]);