pipeline {
  agent none
  stages {
    stage('Building') {
      steps {
        parallel(
          "Building": {
            sh 'npm install'
            
          },
          "Print": {
            echo 'Building'
            
          }
        )
      }
    }
    stage('Running') {
      steps {
        parallel(
          "Running": {
            sh 'node index.js &'
            
          },
          "Print": {
            echo 'Running'
            
          }
        )
      }
    }
    stage('Testing') {
      steps {
        parallel(
          "Testing": {
            sh './node_modules/mocha/.bin/mocha tests --reporter mocha-junit-reporter'
            
          },
          "Print": {
            echo 'Testing'
            
          }
        )
      }
    }
    stage('Assessment') {
      steps {
        junit(testResults: 'test-results.xml', healthScaleFactor: 1)
      }
    }
  }
}