package br.com.pecepoli.demo.controller;

import br.com.pecepoli.demo.dto.PacoteDTO;
import br.com.pecepoli.demo.service.DummyPacoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class DummyPacoteController {
    private final DummyPacoteService dummyPacoteService;

    public DummyPacoteController(DummyPacoteService dummyPacoteService){
        this.dummyPacoteService = dummyPacoteService;
    }

    @RequestMapping(method = GET, path = "/pacotes/**")
    public ResponseEntity<List<PacoteDTO>> obterTodos(){
        List<PacoteDTO> pacotes = dummyPacoteService.obterTodos();
        return ResponseEntity.ok(pacotes);
    }
}
