pipeline {
    agent any


    stages {
        stage('Prepare') {
            steps {
                sh 'echo "Clonning Repository"'
                git branch: 'deploy',
                    url: 'https://lab.ssafy.com/s07-bigdata-recom-sub2/S07P22B304.git',
                    credentialsId: 'homesketcher'
            }
            post {
                success {
                     sh 'echo "Successfully Cloned Repository"'
                 }
                 failure {
                     sh 'echo "Fail Cloned Repository"'
                 }
            }
        }


        // stage('[BE]Bulid Gradle') {
        //     steps {
        //         sh 'echo "Bulid Gradle Start"'
        //         dir('BE') {
                    
        //         }
        //     }
        //     post {
        //          failure {
        //              sh 'echo "Bulid Gradle Fail"'
        //         }
        //     }
        // }

        stage('[BE]Docker stop'){
            steps {
                dir('BE'){
                    sh 'echo "Docker Container Stop"'
    //              도커 컴포즈 다운
                    // sh 'curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose'
    //              해당 도커 컴포즈 다운한 경로로 권한 설정
                    // sh 'chmod -R 777 /usr/local/bin'
                    // sh 'chmod +x /usr/local/bin/docker-compose'
    //              기존 백그라운드에 돌아가던 컨테이너 중지
                    sh 'docker compose stop'
                }


            }
            post {
                 failure {
                     sh 'echo "Docker Fail"'
                }
            }
        }

        stage('[BE]RM Docker'){
            steps {
                
                sh 'echo "Remove Docker"'

                //정지된 도커 컨테이너 찾아서 컨테이너 ID로 삭제함
                sh 'docker container rm $(docker container ls -q --filter "status=exited")'
                
                sh 'result = $(docker images -f "reference=homesketcher*" -q)'

                sh '''
                    if [[ -n "$result" ]]; then
                    echo "Container image exists"
                    else
                    echo "No such container image"
                    fi
                '''


                // <none> 태그 -> 태그가 없는 이미지 일괄 삭제
                // -f(--filter) 옵션으로 필터링 걸어서 이미지 검색 뒤 그 결과를 rmi 명령어 파라미터로 넣어줌
                // dangling 필터는 태그가 없는 경우만 필터링 -> true는 태그가 없는 경우
                //-q(--quiet) 옵션은 ID만 가져올 때 사용
                // 앞의 -f 옵션으로 강제 삭제 -> 몇몇개가 실행중 컨테이너에 있어서 안된다는 에러가 발생해서
                sh 'docker rmi -f $(docker images -f "dangling=true" -q)'
                // homesketcher로 시작하는 이미지 이름을 검색해서 ID 반환하여 삭제함
                // homewsketcher 서비스 이미지만 삭제하는 것
                sh 'docker rmi -f $(docker images -f "reference=homesketcher*" -q)'
                // sh 'docker rm django'
                // sh 'docker rmi homesketcher-django'

            }
            post {
                 failure {
                     sh 'echo "Remove Fail"'
                }
            }
        }

        stage('[BE]Bulid & Run') {
            steps {
                dir('BE'){
                    sh 'echo " Image Bulid Start"'
                    script {

//                         업데이트된 코드로 빌드 및 실행
                        sh 'docker compose up -d'
                    }
                }
            }

            post {
                failure {
                    sh 'echo "Bulid Docker Fail"'
                }
            }
        }

        

        
//         stage('[FE] prepare') {
//             steps {
//                 dir('frontend'){
//                     sh 'echo " Frontend Bulid Start"'
//                     script {
//                         sh 'docker-compose stop'
//                         sh 'docker rm vue'
//                         sh 'docker rmi frontend_vue'
//                     }
//                 }


//             }

//             post {
//                 failure {
//                     sh 'echo "Frontend Build Fail"'
//                 }
//             }
//         }
//         stage('Fronteend Build & Run') {
//             steps {
//                 dir('frontend'){
//                     sh 'echo " Frontend Build and Start"'
//                     script {

// //                         업데이트된 코드로 빌드 및 실행
//                         sh 'docker-compose up -d'
//                     }
//                 }


//             }

//             post {
//                 failure {
//                     sh 'echo "Bulid Docker Fail"'
//                 }
//             }
//         }
    }
}