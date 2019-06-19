
########OLD CODE NOT was used to run a local API server to test the dashboard

import flask
from flask import request, jsonify
import boto3
s3=boto3.client('s3')


app = flask.Flask(__name__)
app.config["DEBUG"] = True




@app.route('/', methods=['GET'])
def home():
    return '''<h1>aws api</h1>
</p>'''


@app.route('/buckets/all', methods=['GET'])
def bucket_all():
    buckets=s3.list_buckets()
    bucketlist=[]
    for i in buckets['Buckets']:
        bucket= i['Name']
        bucketlist.append(bucket)
    
    return  "darshan's bucket list" + str(bucketlist)
	


@app.route('/buckets', methods=['GET'])
def bucektcontent():
    
    if 'bucketname' in request.args:
        bucketname = str(request.args['bucketname'])
    else:
        return "Error: No bucketname field provided. Please specify an bucketname."

    
    results = []

    
    objects=s3.list_objects(Bucket=str(bucketname))

   
    return jsonify(objects[Contents])




app.run(port=7860)
