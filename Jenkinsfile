pipeline {
  agent any
  stages {
    stage('Print Environment') {
      steps {
        sh 'printenv'
      }
    }
    stage('Building') {
      steps {
        sh 'npm install'
      }
    }
    stage('Running') {
      steps {
        sh 'node index.js &'
      }
    }
    stage('Testing') {
      steps {
        sh './node_modules/mocha/bin/mocha tests --reporter mocha-junit-reporter'
      }
    }
    stage('Assessment') {
      steps {
        junit(testResults: 'test-results.xml', healthScaleFactor: 1)
      }
    }
  }
  post {
    failure {
      emailext (
          subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
            <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
          to: "aemielvin.loremia@gmail.com"
        )
    }
  }
}
