pipeline {
  agent any
  stages {
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
        sh './node_modules/mocha/bin/mocha tests'
        sh './node_modules/mocha/bin/mocha tests --reporter mocha-junit-reporter'
      }
    }
  }
  post {
    always {
      junit(testResults: 'test-results.xml', healthScaleFactor: 1)
    }
    failure {
      emailext (
          subject: "CI BUILD FAILED FAILED: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
          body: """
            CI BUILD FAILED FAILED: ${env.JOB_NAME} [${env.BUILD_NUMBER}]

            Check console output at env.BUILD_URL
            """,
          recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'CulpritsRecipientProvider']],

          // [optional] place SME's email in here
          to: "aemielvin.loremia@freedom.tm"
        )
    }
  }
}
