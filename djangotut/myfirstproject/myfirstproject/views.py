from django.http import HttpResponse

HTML_STRING = """

<h1>HELLO WORLD</h1>
"""

def Home_render(request):
    print(1000 * 100)
    return HttpResponse(HTML_STRING)