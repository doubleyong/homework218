//角色
var jueseArr= [
    {
        "rolesID":1,"juese":"管理员","range":"学生管理，班级管理，教职工管理，权限管理，照片墙，考勤管理，公告管理"
    },
    {
        "rolesID":2,"juese":"园长","range":"学生管理，班级管理，教职工管理，照片墙，考勤管理，公告管理"
    },
    {
        "rolesID":3,"juese":"老师","range":"对本班学生管理，对自己的照片墙管理"
    },
    {
        "rolesID":4,"juese":"学生","range":"对自己信息信息修改，查看公告，查看本年级照片"
    },
]

//用户
var userArr= [
    {
        "userID":1,"userNo":100,"userName":"admin","userPwd":"123456","userAge":"25","userSex":"男","juese":"管理员"
    },
    {
        "userID":2,"userNo":101,"userName":"纪杞妃","userPwd":"123456","userAge":"25","userSex":"男","juese":"园长"
    },
    {
        "userID":3,"userNo":102,"userName":"许泓鑫","userPwd":"123456","userAge":"25","userSex":"男","juese":"老师"
    },
    {
        "userID":4,"userNo":103,"userName":"习宁玲","userPwd":"123456","userAge":"25","userSex":"女","juese":"老师"
    },
    {
        "userID":5,"userNo":104,"userName":"羊若然","userPwd":"123456","userAge":"25","userSex":"男","juese":"学生"
    },
    {
        "userID":6,"userNo":105,"userName":"羊多利","userPwd":"123456","userAge":"25","userSex":"女","juese":"学生",

    }

]
//学生
var StudentsFileArr = [
    {
        "studenttNo":"202003","studenttName":"羊若然","studentSex":"男",
        "studentAge":"5","birthday":"2016-2-4","parentsName":"羊付汀","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2020-9-1","grade":"学前班",
        "headeTeacher":"许泓鑫","studentClass":"2班","notes":"在校"
    },
    {
        "studenttNo":"202002","studenttName":"若然","studentSex":"男",
        "studentAge":"5","birthday":"2016-5-4","parentsName":"付汀","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2020-9-1","grade":"学前班",
        "headeTeacher":"李四","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"202001","studenttName":"尔若然","studentSex":"男",
        "studentAge":"5","birthday":"2016-5-4","parentsName":"羊汀","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2020-9-1","grade":"学前班",
        "headeTeacher":"李四","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"202000","studenttName":"羊然","studentSex":"男",
        "studentAge":"5","birthday":"2016-2-4","parentsName":"羊昌","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2020-9-1","grade":"学前班",
        "headeTeacher":"许泓鑫","studentClass":"2班","notes":"在校"
    },

    {
        "studenttNo":"1903","studenttName":"羊若冰","studentSex":"女",
        "studentAge":"6","birthday":"2015-8-4","parentsName":"羊德昌","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2019-9-1","grade":"小班",
        "headeTeacher":"严昌熙","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1902","studenttName":"羊冰","studentSex":"女",
        "studentAge":"6","birthday":"2015-8-4","parentsName":"羊德","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2019-9-1","grade":"小班",
        "headeTeacher":"严昌熙","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1901","studenttName":"毛照君","studentSex":"女",
        "studentAge":"6","birthday":"2015-8-4","parentsName":"毛哲廷","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2019-9-1","grade":"小班",
        "headeTeacher":"凤沁函","studentClass":"2班","notes":"在校"
    },
    {
        "studenttNo":"1900","studenttName":"毛君","studentSex":"女",
        "studentAge":"6","birthday":"2015-8-4","parentsName":"毛廷","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2019-9-1","grade":"小班",
        "headeTeacher":"凤沁函","studentClass":"2班","notes":"退学"
    },

    {
        "studenttNo":"1803","studenttName":"羊多利","studentSex":"女",
        "studentAge":"7","birthday":"2014-8-4","parentsName":"羊希浩","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2018-9-1","grade":"中班",
        "headeTeacher":"习宁玲","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1802","studenttName":"羊利","studentSex":"女",
        "studentAge":"7","birthday":"2014-8-4","parentsName":"羊浩","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2018-9-1","grade":"中班",
        "headeTeacher":"习宁玲","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1801","studenttName":"毛超平","studentSex":"女",
        "studentAge":"5","birthday":"2014-8-4","parentsName":"毛保翔","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2018-9-1","grade":"中班",
        "headeTeacher":"习宁玲","studentClass":"1班","notes":"转学"
    },
    {
        "studenttNo":"1800","studenttName":"毛平","studentSex":"女",
        "studentAge":"5","birthday":"2014-9-4","parentsName":"毛翔","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2018-9-1","grade":"中班",
        "headeTeacher":"习宁玲","studentClass":"1班","notes":"在校"
    },

    {
        "studenttNo":"1702","studenttName":"毛天妍","studentSex":"女",
        "studentAge":"6","birthday":"2014-8-4","parentsName":"毛建","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2017-9-1","grade":"大班",
        "headeTeacher":"羊轩荣","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1701","studenttName":"毛妍","studentSex":"女",
        "studentAge":"6","birthday":"2014-8-4","parentsName":"毛建勇","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2017-9-1","grade":"大班",
        "headeTeacher":"羊轩荣","studentClass":"1班","notes":"在校"
    },
    {
        "studenttNo":"1700","studenttName":"毛天","studentSex":"女",
        "studentAge":"6","birthday":"2014-9-4","parentsName":"毛勇","parentsPhone":"123456789","address":"四川-成都","enrolledDate":"2017-9-1","grade":"大班",
        "headeTeacher":"羊轩荣","studentClass":"1班","notes":"在校"
    }

];

//班级
var classArr = [
    {
        "classTypeName": "学前班", "classNum": "1班", "className": "小花班", "headeTeacher": "李四", "viceTeacher": "张三", "classTime": "2020-9-1",
    },
    {
        "classTypeName": "学前班", "classNum": "2班", "className": "奇思妙想班", "headeTeacher": "许泓鑫", "viceTeacher": "许子谆", "classTime": "2020-9-1",
    },
    {
        "classTypeName": "小班", "classNum": "1班", "className": "天天向上班", "headeTeacher": "严昌熙", "viceTeacher": "严邦立", "classTime": "2019-9-1",
    },
    {
        "classTypeName": "小班", "classNum": "2班", "className": "启航班", "headeTeacher": "凤沁函", "viceTeacher": "凤浩正", "classTime": "2019-9-1",
    },
    {
        "classTypeName": "中班", "classNum": "1班", "className": "蔷薇班", "headeTeacher": "习宁玲", "viceTeacher": "习晨兰", "classTime": "2018-9-1",
    },
    {
        "classTypeName": "大班", "classNum": "1班", "className": "我们这一班", "headeTeacher": "羊轩荣", "viceTeacher": "羊宝琴", "classTime": "2017-9-1",
    }
]

//教职工
var employeesArr = [
    {
        "employeesNum": "123", "employeesName": "李四", "employeesSex": "男", "employeesAge": "22", "birthday": "1994-2-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2020-8-1"
    },
    {
        "employeesNum": "124", "employeesName": "张三", "employeesSex": "男", "employeesAge": "22", "birthday": "1993-2-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2020-8-1"
    },
    {
        "employeesNum": "125", "employeesName": "许泓鑫", "employeesSex": "女", "employeesAge": "26", "birthday": "1992-2-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2019-8-1"
    },
    {
        "employeesNum": "126", "employeesName": "许子谆", "employeesSex": "女", "employeesAge": "28", "birthday": "1990-2-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2019-6-1"
    },
    {
        "employeesNum": "127", "employeesName": "严昌熙", "employeesSex": "女", "employeesAge": "29", "birthday": "1990-2-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2018-6-1"
    },
    {
        "employeesNum": "128", "employeesName": "严邦立", "employeesSex": "男", "employeesAge": "29", "birthday": "1990-8-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2018-7-1"
    },
    {
        "employeesNum": "129", "employeesName": "凤沁函", "employeesSex": "女", "employeesAge": "29", "birthday": "1990-8-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2017-7-1"
    },
    {
        "employeesNum": "130", "employeesName": "凤浩正", "employeesSex": "男", "employeesAge": "30", "birthday": "1986-8-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2016-7-1"
    },
    {
        "employeesNum": "131", "employeesName": "习宁玲", "employeesSex": "女", "employeesAge": "31", "birthday": "1985-8-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2015-7-1"
    },
    {
        "employeesNum": "132", "employeesName": "习晨兰", "employeesSex": "女", "employeesAge": "31", "birthday": "1985-8-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2015-8-1"
    },
    {
        "employeesNum": "133", "employeesName": "羊轩荣", "employeesSex": "女", "employeesAge": "33", "birthday": "1983-3-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2013-8-1"
    },
    {
        "employeesNum": "134", "employeesName": "羊宝琴", "employeesSex": "女", "employeesAge": "33", "birthday": "1983-3-3", "state": "在岗", "phone": "123456789", "address": "四川成都", "job": "教师", "inductionDate": "2015-8-1"
    },

]

var newsArr=[
    {"newsName":"清明放假通知","newsContent":"值清明节来临之际，根据国家有" +
            "关规定，结合我公司实际情况，经领导研究决定,现将2020年清明节放假安排通知如下：" +
            "清明节放假安排：4月4日至6日放假，共3天。4月7日(星期二)正式上班。" +
            "放假之前请各部门做好节前工作安排" ,"newsPeople":"管理员","newsTime":"2020.03.31  10:32"},
    {"newsName":"教学保障","newsContent":"疫情期间请各位老师做好相关教学工作" +
            "保质保量完成教学任务，并在课间给同学们做体温检测" ,"newsPeople":"管理员","newsTime":"2020.03.21  10:32"},
    {"newsName":"职员培训","newsContent":"各位同事，兹定于8月20日到8月22日，在公司举行2020年新员工培训," +
            "请相关部门领导和员工提前安排好时间，按时参加培训；原则上所有新员工均须出席培训，如果有特殊情况请假，需院领导批准。"
        ,"newsPeople":"管理员","newsTime":"2020.01.21  10:32"},
    {"newsName":"准备活动","newsContent":"近日，省委领导将来参观我公司各家分公司网点，请各位同仁努力作好各部门的本职工作，" +
            "以全新的面貌迎接检查。"
        ,"newsPeople":"管理员","newsTime":"2020.01.11  10:32"},
];

//    教师数据
var classArr = [
    {
        "classId":"201601","classTypeName":"学前班","classNum":"1班","className":"小花班","headeTeacher":"李四","viceTeacher":"张三","classTime":"2020-9-1",
    },
    {
        "classId":"201602", "classTypeName":"学前班","classNum":"2班","className":"奇思妙想班","headeTeacher":"许泓鑫","viceTeacher":"许子谆","classTime":"2020-9-1",
    },
    {
        "classId":"201603", "classTypeName":"小班","classNum":"1班","className":"天天向上班","headeTeacher":"严昌熙","viceTeacher":"严邦立","classTime":"2019-9-1",
    },
    {
        "classId":"201604", "classTypeName":"小班","classNum":"2班","className":"启航班","headeTeacher":"凤沁函","viceTeacher":"凤浩正","classTime":"2019-9-1",
    },
    {
        "classId":"201701","classTypeName":"中班","classNum":"1班","className":"蔷薇班","headeTeacher":"习宁玲","viceTeacher":"习晨兰","classTime":"2018-9-1",
    },
    {
        "classId":"201702","classTypeName":"大班","classNum":"1班","className":"我们这一班","headeTeacher":"羊轩荣","viceTeacher":"羊宝琴","classTime":"2017-9-1",
    },
    {
        "classId":"201703","classTypeName":"学前班","classNum":"1班","className":"小花班","headeTeacher":"李四","viceTeacher":"张三","classTime":"2020-9-1",
    },
    {
        "classId":"201704", "classTypeName":"学前班","classNum":"2班","className":"奇思妙想班","headeTeacher":"许泓鑫","viceTeacher":"许子谆","classTime":"2020-9-1",
    },
    {
        "classId":"201801", "classTypeName":"小班","classNum":"1班","className":"天天向上班","headeTeacher":"严昌熙","viceTeacher":"严邦立","classTime":"2019-9-1",
    },
    {
        "classId":"201802", "classTypeName":"小班","classNum":"2班","className":"启航班","headeTeacher":"凤沁函","viceTeacher":"凤浩正","classTime":"2019-9-1",
    },
    {
        "classId":"201803","classTypeName":"中班","classNum":"1班","className":"蔷薇班","headeTeacher":"习宁玲","viceTeacher":"习晨兰","classTime":"2018-9-1",
    },
    {
        "classId":"201804","classTypeName":"大班","classNum":"1班","className":"我们这一班","headeTeacher":"羊轩荣","viceTeacher":"羊宝琴","classTime":"2017-9-1",
    },
    {
        "classId":"201901","classTypeName":"学前班","classNum":"1班","className":"小花班","headeTeacher":"李四","viceTeacher":"张三","classTime":"2020-9-1",
    },
    {
        "classId":"201902", "classTypeName":"学前班","classNum":"2班","className":"奇思妙想班","headeTeacher":"许泓鑫","viceTeacher":"许子谆","classTime":"2020-9-1",
    },
    {
        "classId":"201903", "classTypeName":"小班","classNum":"1班","className":"天天向上班","headeTeacher":"严昌熙","viceTeacher":"严邦立","classTime":"2019-9-1",
    },
    {
        "classId":"201904", "classTypeName":"小班","classNum":"2班","className":"启航班","headeTeacher":"凤沁函","viceTeacher":"凤浩正","classTime":"2019-9-1",
    },
    {
        "classId":"202001","classTypeName":"中班","classNum":"1班","className":"蔷薇班","headeTeacher":"习宁玲","viceTeacher":"习晨兰","classTime":"2018-9-1",
    },
    {
        "classId":"202002","classTypeName":"大班","classNum":"1班","className":"我们这一班","headeTeacher":"羊轩荣","viceTeacher":"羊宝琴","classTime":"2017-9-1",
    },
    {
        "classId":"202003","classTypeName":"中班","classNum":"1班","className":"蔷薇班","headeTeacher":"习宁玲","viceTeacher":"习晨兰","classTime":"2018-9-1",
    },
    {
        "classId":"202004","classTypeName":"大班","classNum":"1班","className":"我们这一班","headeTeacher":"羊轩荣","viceTeacher":"羊宝琴","classTime":"2017-9-1",
    }
];//班级数组
var classTypeArr=["小班","中班","大班","学前班"];